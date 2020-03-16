/* eslint-disable @typescript-eslint/interface-name-prefix */
// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    body: string
    text: string
    toggleBorder: string
    gradient: string
  }
}
