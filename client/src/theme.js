import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const HEADER_HEIGHT = '58px'
const MENU_HEIGHT = '60px'
const CONTENT_FOOTER_HEIGHT = `calc(100vh - ${HEADER_HEIGHT} - ${MENU_HEIGHT})`

// import { createTheme } from '@mui/material/styles'

// Create a theme instance.
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#556cd6'
//     },
//     secondary: {
//       main: '#19857b'
//     },
//     error: {
//       main: red.A400
//     }
//   }
// })
const theme = extendTheme({
  web: {
    headerHeight: HEADER_HEIGHT,
    menuHeight: MENU_HEIGHT,
    contentFooterHeight: CONTENT_FOOTER_HEIGHT
  },

  colorSchemes: {
    light: {},
    dark: {}
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }

    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': { borderWidth: '0.5px' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root:{ fontSize: '0.875rem' }
      }
    },
    MuiTyprography: {
      styleOverrides: {
        // Name of the slot
        root:{
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root:{
          fontSize: '0.875rem',
          '& fieldset': {
            borderWidth: '0.5px !important'
          },
          '&:hover fieldset': {
            borderWidth: '1px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px !important'
          }
        }
      }
    }
  }
})


export default theme