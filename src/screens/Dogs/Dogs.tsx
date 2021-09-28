import UselessComponent from '../../components/AnnoyingDog'
import CreateDog from '../../components/CreateDog'
import { useGetDogsQuery } from '../../hooks/useApollo'
import { Container, Header, PageContainer } from './Dogs.styled'

export const Dogs = () => {
	const { data, loading, error } = useGetDogsQuery()

	return (
		<PageContainer>
			<div style={{ width: '100%' }}>
				<Header>
					<h1>🐶 Pawesome! 🐶</h1>
				</Header>
				<Container>
					{loading && <h1>Loading...</h1>}
					{error && <h1>An error ocurred, make sure the API is running...</h1>}
					{data && (
						<>
							<ul>
								{data?.dogs?.map(({ id, name, age, isPedigree }) => (
									<li key={id}>
										<h2>Name: {name}</h2>
										<h5>Age: {age}</h5>
										<h5>Is Pedigree: {isPedigree}</h5>
									</li>
								))}
							</ul>
							<CreateDog />
						</>
					)}
				</Container>
			</div>
			<UselessComponent />
		</PageContainer>
	)
}

export default Dogs
