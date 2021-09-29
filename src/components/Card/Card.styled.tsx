import styled from 'styled-components'

export const CardContainer = styled.div`
	width: 100%;
	padding: 24px;
	margin: 8px 16px;
	word-wrap: break-word;
	background-color: #f2f2f2;
	box-shadow: 0 2px 3px #ccc;
	border-radius: 8px;
	color: #333;
	p {
		margin: 4px 0;
	}

	@media only screen and (min-width: 500px) {
		width: 200px;
	}
`

export const DeleteButton = styled.button`
	margin-top: 12px;
	background-color: #d11a2a;
	width: 100%;
	border: 0 none;
	font-weight: 600;
	padding: 6px 16px;
	border-radius: 12px;
	color: #fff;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: #aa101d;
	}
`
