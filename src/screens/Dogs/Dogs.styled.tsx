import styled from 'styled-components'

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: calc(100vh * 4);
`

export const Container = styled.main`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 24px 16px;

	@media only screen and (min-width: 768px) {
		padding: 24px 48px;
	}
`

export const Header = styled.header`
	display: flex;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
	padding: 12px 0;
	background-color: #65c4f0;
	border-end-end-radius: 56px;
	border-end-start-radius: 56px;

	h1 {
		font-size: 2rem;
		text-align: center;
	}
`
