import { ChangeEvent, FormEvent, useState } from 'react'
import { useAddDogMutation } from '../../hooks/useApollo'
import {
	Error,
	Form,
	Input,
	Label,
	RadioInput,
	SubmitButton,
	Title
} from './CreateDog.styled'
import type { DogModel } from '../../models'

type FormState = DogModel
interface Props {
	addDog: (data: DogModel) => void
}

const defaultState: FormState = {
	name: '',
	age: 0,
	isPedigree: false
}

export const CreateDog = ({ addDog }: Props) => {
	const [form, setForm] = useState<FormState>(defaultState)
	const [createDog, { loading, error }] = useAddDogMutation({
		onError: () => {},
		onCompleted: data =>
			// eslint-disable-next-line implicit-arrow-linebreak
			addDog(data.addDog)
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleChangeRadio = (checked: boolean) => {
		setForm({ ...form, isPedigree: checked })
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createDog({
			variables: {
				addDogInput: {
					...form,
					age: Number(form.age)
				}
			}
		})
		if (!error) {
			setForm(defaultState)
		}
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Title>Create your own dog!</Title>
			{error && <Error>An error ocurred, please try again.</Error>}
			<Label>
				Name:
				<Input
					type='text'
					minLength={1}
					name='name'
					onChange={handleChange}
					value={form.name}
					id='name'
				/>
			</Label>
			<Label>
				Age:
				<Input
					type='number'
					min={0}
					max={20}
					name='age'
					onChange={handleChange}
					value={form.age}
					id='age'
				/>
			</Label>
			<div>
				<Label htmlFor='isPedigree'>Is Pedigree?</Label>
				<div>
					<Label>
						<RadioInput
							type='radio'
							name='isPedigree'
							id='isPedigree'
							onChange={() => handleChangeRadio(true)}
							checked={form.isPedigree}
							value='Yes'
						/>
						Yes
					</Label>
					<Label>
						<RadioInput
							type='radio'
							name='isPedigree'
							id='isPedigree'
							onChange={() => handleChangeRadio(false)}
							checked={!form.isPedigree}
						/>
						No
					</Label>
				</div>
			</div>
			<div>
				<SubmitButton disabled={loading} type='submit'>
					Create Dog!
				</SubmitButton>
			</div>
		</Form>
	)
}

export default CreateDog
