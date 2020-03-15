import React from 'react'
import {ToggleContainer} from './styles'

const Toggle = ({toggleTheme}: {toggleTheme:  (() => void )}) => {
	
	return (
		<ToggleContainer onClick={toggleTheme}>
			Switch Theme
		</ToggleContainer>
	)
}

export default Toggle