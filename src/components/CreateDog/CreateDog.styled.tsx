import styled from 'styled-components'

export const Title = styled.h1`
	color: #333;
	font-size: 1.5rem;
	text-align: center;
	margin-bottom: 24px;
`

export const Error = styled.h4`
	color: #ff0000;
	text-align: center;
	margin-bottom: 16px;
`

export const Form = styled.form`
	width: 100%;
	border: 1px solid #ccc;
	background-color: #fafafa;
	padding: 24px 40px;
	border-radius: 12px;
	color: #333;

	@media only screen and (min-width: 486px) {
		width: 400px;
	}
`

export const Input = styled.input`
	width: 100%;
	padding: 12px 8px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	outline: 0;
`

export const RadioInput = styled.input`
	vertical-align: -2px;
	margin: 4px 4px 0 0;
`

export const Label = styled.label`
	margin-right: 16px;
	font-size: 0.9rem;
`

export const SubmitButton = styled.button`
	margin-top: 16px;
	width: 100%;
	padding: 16px 0;
	background-color: #89cff0;
	color: #fff;
	text-transform: uppercase;
	font-weight: 600;
	border: 0 none;
	border-radius: 4px;
	transition: background-color 0.3s;

	&:active {
		background-color: #6ec6ee;
	}
`
