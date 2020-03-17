// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dev = {
  API_URL: '',
  // BUILD_NUMBER: __BUILD_NUMBER__,
  // VERSION: __VERSION__,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const staging = {
  API_URL: '',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const qa = {
  API_URL: '',
}

const env = window._env_ || dev

export default env
