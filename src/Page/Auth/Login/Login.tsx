import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "40vw", xs: "90vw" },
  height: "60vh",
  bgcolor: "background.auth",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface FormData {
  email: string;
  password: string;
}
export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Handle form submission logic here
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button variant="text" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title-login"
        aria-describedby="modal-modal-description-login"
      >
        <Box sx={style} id="modal-modal-title-login">
          <Box
            sx={{
              display: { md: "flex", xs: "block" },
              width: { md: "30%", xs: "100%" },
              justifyContent: "space-between",
              alignItems: "center",
              pb: { md: 5, sm: 5, xs: 2 },
            }}
          >
            <Typography
              sx={{
                display: "inline-block",
                fontSize: "1.7rem",
                fontWeight: "bold",
                color: "primary.main",
              }}
            >
              Fiverr
            </Typography>

            <Button variant="text">Home</Button>
            <Button variant="text">Join</Button>
          </Box>
          <Box>
            <Box>
              <Typography variant="subtitle2" color="primary.main">
                Welcome back
              </Typography>
            </Box>
            <Box sx={{ py: { md: 2, xs: 0, sm: 2 } }}>
              <Typography variant="h1" color="primary.h1">
                Sign in to Fiverr
              </Typography>
            </Box>
          </Box>

          <Box pt={4}>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: { md: "flex", xs: "block" },
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ pt: { xs: 1, sm: 2, md: 2 } }}>
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                  <Box pt={2}>
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                  <Box pt={2}>
                    <Button variant="contained">Login</Button>
                  </Box>
                </Box>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
