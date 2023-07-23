import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import MdPhone from "@mui/icons-material/Phone";
import { Typography } from "@material-ui/core/index";
import React from "react";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material/styles";
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}
function App() {
  return (
    <>
      <ModeToggle />
      <Typography variant="body2" color="secondary">
        123
      </Typography>
      <Button variant="contained" color="secondary">
        Hello World
      </Button>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>

      <Chip icon={<MdPhone />} label="Docuteeeé" />
    </>
  );
}

export default App;
