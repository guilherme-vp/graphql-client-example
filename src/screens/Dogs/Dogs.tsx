import UselessComponent from '../../components/AnnoyingDog'
import { Card } from '../../components/Card'
import CreateDog from '../../components/CreateDog'
import { useGetDogsQuery, useRemoveDogMutation } from '../../hooks/useApollo'
import { CardsContainer, Container, Header, PageContainer } from './Dogs.styled'

export const Dogs = () => {
	const { data, loading, error, refetch } = useGetDogsQuery()
	const [removeDog] = useRemoveDogMutation({
		onCompleted: () => {
			refetch()
		},
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		onError: () => {}
	})

	const handleDelete = (id: string) => {
		removeDog({
			variables: { removeDogId: id }
		})
	}

	return (
		<PageContainer>
			<div style={{ width: '100%' }}>
				<Header>
					<h1>🐶 Pawesome! 🐶</h1>
				</Header>
				<Container>
					{loading && <h1>Loading...</h1>}
					{error && <h1>An error ocurred, make sure the API is running...</h1>}
					{data?.dogs && (
						<>
							<CardsContainer>
								{data.dogs.map(dog => (
									<Card handleDelete={handleDelete} key={dog.id} dog={dog} />
								))}
							</CardsContainer>
							<CreateDog refetch={refetch} />
						</>
					)}
				</Container>
			</div>
			<UselessComponent />
		</PageContainer>
	)
}

export default Dogs
