import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useColorScheme,
} from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { SelectChangeEvent } from "@mui/material/Select";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event: SelectChangeEvent) => {
    const selectedMode: any = event.target.value;
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon sx={{ color: "primary.main" }} />
            <Typography sx={{ color: "primary.main" }}>Light</Typography>
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeIcon sx={{ color: "primary.main" }} />
            <Typography sx={{ color: "primary.main" }}>Dark</Typography>
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <SettingsBrightnessIcon sx={{ color: "primary.main" }} />
            <Typography sx={{ color: "primary.main" }}>System</Typography>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect;
