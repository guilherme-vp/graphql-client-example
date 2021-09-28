import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	html {
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	* {
		margin: 0;
		padding: 0;
		&, &::before, &::after {
			box-sizing: border-box;
		}
	}

	body {
		color: #333;
		font-size: 0.875rem;
	 	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 1.43;
		overflow-x: hidden;
		letter-spacing: 0.01071em;
		background-color: #F8F9FE;
	}

	button {
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	}

	body::backdrop {
		background-color: #fafafa;
	}

	a {
		font-size: inherit;
		text-decoration: none;
		color: #4a90e2;
	}

	.custom-scrollbar {
		outline: none;
		scrollbar-color: rgba(1, 1, 1, 0.06);
		scrollbar-width: 5px;
		&::-webkit-scrollbar {
			-webkit-appearance: none;
			width: 5px;
			height: 5px;
		}

		&::-webkit-scrollbar-corner {
			background: rgba(0, 0, 0, 0);
		}

		&::-webkit-scrollbar-thumb {
			max-height: 100px;
			background-color: rgba(1, 1, 1, 0.06);
			border-radius: 5px;
		}

		&::-webkit-scrollbar-track {
			background-color: inherit;
		}
	}
`

export default GlobalStyle
