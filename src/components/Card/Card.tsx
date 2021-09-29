import { DogModel } from '../../models'
import { CardContainer, DeleteButton } from './Card.styled'

interface Props {
	handleDelete: (id: string) => void
	dog: DogModel
}

export const Card = ({ handleDelete, dog: { id, name, age, isPedigree } }: Props) => (
	<CardContainer>
		<div>
			<p>
				<strong>Name: </strong> {name}
			</p>
			<p>
				<strong>Age: </strong> {age}
			</p>
			<p>
				<strong>Is Pedigree?:</strong> {isPedigree ? 'Yes' : 'No'}
			</p>
		</div>
		<div>
			<DeleteButton onClick={() => handleDelete(id as string)} type='button'>
				Remove
			</DeleteButton>
		</div>
	</CardContainer>
)

export default Card
