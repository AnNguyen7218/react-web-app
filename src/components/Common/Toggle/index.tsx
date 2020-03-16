import React from 'react'
import { ToggleContainer } from './styles'

const Toggle = ({
  toggleAction,
  toggleText,
}: {
  toggleAction: () => void
  toggleText: string
}): JSX.Element => {
  return <ToggleContainer onClick={toggleAction}>{toggleText}</ToggleContainer>
}

export default Toggle
