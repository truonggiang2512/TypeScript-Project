import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import MdPhone from "@mui/icons-material/Phone";
import { Typography } from "@material-ui/core/index";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import React from "react";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event: SelectChangeEvent) => {
    const selectedMode: string = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Chip icon={<LightModeIcon fontSize="small" />} label="Light" />
        </MenuItem>
        <MenuItem value="dark">
          <Chip icon={<DarkModeIcon fontSize="small" />} label="Dark" />
        </MenuItem>
        <MenuItem value="system">
          <Chip
            icon={<SettingsBrightnessIcon fontSize="small" />}
            label="System"
          />
        </MenuItem>
      </Select>
    </FormControl>
  );
}
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
      <ModeSelect />
      <hr />
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
