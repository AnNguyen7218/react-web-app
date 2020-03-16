import React from 'react'
import { LoadingContainer, LoadingItem } from './styles'

const LoadingComponent = (): JSX.Element => {
  return (
    <LoadingContainer>
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
      <LoadingItem />
    </LoadingContainer>
  )
}

export default LoadingComponent
