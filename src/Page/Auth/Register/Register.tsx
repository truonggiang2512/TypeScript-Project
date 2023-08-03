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
import Daypicker from "./DayPicker";

interface FormData {
  id: 0;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: true;
  role: string;
  skill: [string];
  certification: [string];
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "90vh",
  bgcolor: "background.auth",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};
export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    id: 0,
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "",
    skill: [""],
    certification: [""],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Handle form submission logic here
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState("");

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    console.log(value);
  };
  return (
    <div>
      <Button color="success" variant="outlined" onClick={handleOpen}>
        Join
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <Box id="modal-modal-description">
              <Box
                pb={10}
                sx={{
                  display: { md: "flex", xs: "block" },
                  width: { md: "30%", xs: "100%" },
                  justifyContent: "space-between",
                  alignItems: "center",
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
                    Start for free
                  </Typography>
                </Box>
                <Box py={2}>
                  <Typography variant="h1" color="primary.h1">
                    Create new account
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
                    <Box sx={{ width: { md: "40%", xs: "100%" } }}>
                      <Box pt={2}>
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Box>
                      <Box pt={2}>
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
                    </Box>
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Box
                        sx={{ paddingRight: { md: "90px", xs: "0px" } }}
                        pt={2}
                      >
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </FormControl>
                      </Box>
                      <Box
                        pt={2}
                        sx={{ paddingRight: { md: "90px", xs: "0px" } }}
                      >
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
                        <Daypicker />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: { md: "flex", xs: "block" },
                      width: { md: "40%", xs: "100%" },
                      justifyContent: "space-between",
                    }}
                  >
                    <Box mt={2}>
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Gender
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                          value={value}
                          onChange={handleChange1}
                        >
                          <FormControlLabel
                            value={false}
                            control={<Radio />}
                            label="Female"
                          />
                          <FormControlLabel
                            value={true}
                            control={<Radio />}
                            label="Male"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                    <Box pt={2}>
                      <FormControl margin="normal">
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          Sign Up
                        </Button>
                      </FormControl>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
