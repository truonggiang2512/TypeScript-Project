import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import MdPhone from "@mui/icons-material/Phone";
import { Typography } from "@mui/material/index";
function App() {
  return (
    <>
      <div>Docute</div>
      <Typography variant="body2" color="text.secondary">
        123
      </Typography>
      <Button variant="contained">Hello World</Button>
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
