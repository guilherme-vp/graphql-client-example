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

interface FormState {
	name: string
	age: number
	pedigree: boolean
}
interface Props {
	handleCreate: () => void
}

const defaultState: FormState = {
	name: '',
	age: 0,
	pedigree: false
}

export const CreateDog = ({ handleCreate }: Props) => {
	const [form, setForm] = useState<FormState>(defaultState)
	const [createDog, { loading, error }] = useAddDogMutation({
		onError: () => {}
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleChangeRadio = (checked: boolean) => {
		setForm({ ...form, pedigree: checked })
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		createDog({
			variables: {
				addDogInput: {
					...form,
					isPedigree: form.pedigree
				}
			}
		})
		if (!error) {
			handleCreate()
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
							checked={form.pedigree}
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
							checked={!form.pedigree}
						/>
						No
					</Label>
				</div>
			</div>
			<div>
				<SubmitButton disabled={loading} type='submit'>
					Create!
				</SubmitButton>
			</div>
		</Form>
	)
}

export default CreateDog
