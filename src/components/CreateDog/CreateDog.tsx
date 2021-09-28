import { ChangeEvent, FormEvent, useState } from 'react'
import { Form, Input, Label, RadioInput, SubmitButton, Title } from './CreateDog.styled'

interface FormState {
	name: string
	age: number
	pedigree: boolean
}

const defaultState: FormState = {
	name: '',
	age: 0,
	pedigree: false
}

export const CreateDog = () => {
	const [form, setForm] = useState<FormState>(defaultState)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleChangeRadio = (checked: boolean) => {
		setForm({ ...form, pedigree: checked })
	}

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setForm(defaultState)
	}

	return (
		<Form onSubmit={onSubmit}>
			<Title>Create your own dog!</Title>
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
				<SubmitButton type='submit'>Create!</SubmitButton>
			</div>
		</Form>
	)
}

export default CreateDog
