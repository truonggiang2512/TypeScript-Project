import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

type Props = {};

function InputCmt({}: Props) {
  const [tfValue, setTFValue] = useState("My Text");
  return (
    <form>
      <TextField
        fullWidth
        id="add-comment"
        name="add-comment"
        label="Add comment"
        placeholder="Placeholder"
        multiline
      />
      <Box py={3}>
        <Button size="large" variant="contained">
          Add comment
        </Button>
      </Box>
    </form>
  );
}

export default InputCmt;
