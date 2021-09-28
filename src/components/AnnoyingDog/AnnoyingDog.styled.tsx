import styled from 'styled-components'

export const NothingContainer = styled.div`
	word-wrap: break-word;
	padding-bottom: 24px;
	text-align: center;
`

export const DogContainer = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	justify-content: center;
	padding-bottom: 24px;
`

export const AnimatedAnnoyingDog = styled.img.withConfig<{ hasClicked?: boolean }>({})`
	position: absolute;
	width: 200px;
	left: ${props => (props.hasClicked ? '-50%' : 'calc(50% - 100px)')};
	transition: all 0.5s;
	bottom: -80px;
`
