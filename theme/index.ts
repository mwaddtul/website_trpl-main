import { extendTheme } from '@chakra-ui/react'
import { theme } from '@saas-ui/react'

import components from './components'
import { fontSizes } from './foundations/typography'

import '@fontsource/inter/variable.css'
import { FaBold } from 'react-icons/fa'

const styles = {
  global: (props: any) => ({
    body: {
      color: 'gray.900',
      bg: 'white',
      fontSize: 'lg',
      _dark: {
        color: 'white',
        bg: 'gray.900',
      },
      h1: {
        fontSize: '50px',
        fontWeight: 'bold',
        mb: '4',
      },
      h2: {
        fontSize: '40px',
        fontWeight: 'bold',
        mb: '4',
      },
      h3: {
        fontSize: '30px',
        fontWeight: 'bold',
        mb: '4',
      },
      h4: {
        fontSize: '27px',
        fontWeight: 'bold',
        mb: '4',
      },
      h5: {
        fontSize: '25px',
        fontWeight: 'bold',
        mb: '4',
      },
      p: {
        fontSize: '16px',
        mb: '2',
      },
    },
  }),
}

export default extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles,
    fontSizes,
    components,
  },
  theme
)
