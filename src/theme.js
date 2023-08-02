import { blue, deepOrange, grey, orange, red } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
  fiverr: {
    header: { height: "80px" },
    footer: { height: "160px" },
    outlet: { height: "200vh " }
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: grey[700],
          h1: grey[800],
          boder: grey[300]

        },
        secondary: {
          main: '#fff'
        },
        background: {
          paper: "white",
          proposition: "#f0fdf6",
          solutions: "#0d084d"
        },
        hover: {
          color: "white"
        }
      },
      spacing: (factor) => `${8 * factor}px`,

    },
    dark: {
      palette: {
        primary: {
          main: '#fff',
          h1: blue[300],
          boder: blue[300]
        },
        secondary: {
          main: "#000"
        },
        background: {
          paper: "#090909",
          proposition: "#212121",
          solutions: "#212121"
        },
        hover: {
          color: "#272727"
        }
      },
      spacing: (factor) => `${8 * factor}px`,
    },
  },

  typography: {
    h3: {
      lineHeight: 1.4,
      fontSize: 32,
      fontWeight: 700,
    },
    subtitle2: {
      lineHeight: 1.5,
      fontSize: 18,
      fontWeight: 500,

    },
    subtitle1: {
      lineHeight: 1.5,
      fontSize: 18,
      fontWeight: 400,
    },
    body1: {
      lineHeight: 1.5,
      fontSize: 14,
      fontWeight: 300,
    },
    body2: {
      lineHeight: 1.5,
      fontSize: 14,
      fontWeight: 600,
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: "8px",
            height: "8px"
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: "grey"
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: "black"
          }
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: "#898989",
          fontSize: "0.875 rem",
        })
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875 rem",
            '.MuiOutlinedInput-notchedOutline': {
              boderColor: theme.palette.primary.main,
              border: `1px solid ${theme.palette.primary.main}`
            },
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                boderColor: theme.palette.primary.main,
                border: `1px solid ${theme.palette.primary.main}`
              },
            },
            '& fieldset': {
              boderWidth: "1px important"
            }
          }
        }
      },
    },


  },
});

export default theme
