import { useState } from 'react'
import annoyingDog from '../../assets/nothing_here.gif'
import barkSound from '../../assets/useless_song.mp3'
import { AnimatedAnnoyingDog, DogContainer, NothingContainer } from './AnnoyingDog.styled'

export const AnnoyingDog = () => {
	const audio = new Audio(barkSound)
	const key = 'ACTIVATE_VIRUS'
	const clicked = localStorage.getItem(key)
	const [hasClicked, setHasClicked] = useState(false)

	const handleClick = () => {
		audio.play()
		setHasClicked(true)
		localStorage.setItem(key, 'false')
	}

	if (clicked === 'false' && !hasClicked) {
		return (
			<NothingContainer>
				<h1>There is nothing to see here...</h1>
				<p>Just this useless text</p>
			</NothingContainer>
		)
	}

	return (
		<DogContainer>
			{hasClicked && <h1>He ran away.</h1>}
			<AnimatedAnnoyingDog
				onClick={() => handleClick()}
				hasClicked={hasClicked}
				src={annoyingDog}
				alt='annoying'
			/>
		</DogContainer>
	)
}

export default AnnoyingDog
