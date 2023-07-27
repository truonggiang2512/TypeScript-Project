import { cyan, deepOrange, orange, teal } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
      spacing: (factor) => `${8 * factor}px`,
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
      spacing: (factor) => `${8 * factor}px`,
    },
  },
});

export default theme
