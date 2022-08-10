import * as React from "react";

import { Container, Box, TextField, Button ,Stack} from "@mui/material";

const User = () => {
  return (
    <div className="Maindiv">
      <Container>
        <div className="Formdiv">
          <Box
            component="form"
            sx={{
              "& > :not(style)": {
                m: 3,
                width: "25ch",
                display: "flex",
                marginLeft: "32%",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="UserName"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="LastName"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="contact" variant="outlined" />
            <TextField id="outlined-basic" label="Address" variant="outlined" />
            <Stack direction="row" sx={{width:"20px",  paddingLeft:"7.5%"}}>
            <Button  variant="contained">Contained</Button>
            </Stack>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default User;
