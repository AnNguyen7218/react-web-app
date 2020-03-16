import styled, { keyframes } from 'styled-components'

const ellipsis1 = keyframes`
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}`

const ellipsis2 = keyframes`
	0% {
		transform: translate(0, 0);
	}
	100% {
		transform: translate(24px, 0);
	}`

const ellipsis3 = keyframes`
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(0);
	}`

const LoadingItem = styled.div`
  position: 'absolute',
  top: '33px',
  width: '13px',
  height: '13px',
  'border-radius': '50%',
  background: '#000',
  'animation-timing-function': 'cubic-bezier(0, 1, 1, 0)',
})`

const LoadingContainer = styled.div`
  display: 'inline-block',
  position: 'relative',
  width: '80px',
	height: '80px',
	& ${LoadingItem}:nth-child(1) {
    left: 8px;
    animation: ${ellipsis1} 0.6s infinite;
	}
	& ${LoadingItem}:nth-child(2) {
		left: 8px;
    animation: ${ellipsis2} 0.6s infinite;
	}
	& ${LoadingItem}:nth-child(3) {
		left: 32px;
    animation: ${ellipsis2} 0.6s infinite;
	}
	& ${LoadingItem}:nth-child(4) {
		left: 56px;
    animation: ${ellipsis3} 0.6s infinite;
	}
})`

export { LoadingContainer, LoadingItem }
