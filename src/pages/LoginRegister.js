import { useState } from "react";
import { Container, Box, Grid, Tabs, Tab,Typography, TextField, Button } from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./LoginRegister.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LoginRegister = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="LoginRegister">
      <Container maxWidth="lg">
        <Grid className="LoginRegister__Container"
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={7} align="center">
            <NavLink className="LoginRegister__Logo" to="/"></NavLink>
          </Grid>
          <Grid item xs={5}>
            <Box sx={{ width: "100%" }} bgcolor="white">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  centered
                  aria-label="basic tabs example"
                >
                  <Tab label="Đăng ký" {...a11yProps(0)} />
                  <Tab label="Đăng nhập" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Box component="form" fullWidth>
                  <TextField id="outlined-basic" type="email" label="Email" fullWidth sx={{ my: 1 }} variant="outlined" />
                  <TextField id="outlined-basic" type="text" label="Họ và Tên" fullWidth sx={{ my: 1 }} variant="outlined" />
                  <TextField id="outlined-basic" type="password" label="Mật khẩu" fullWidth sx={{ my: 1 }} variant="outlined" />
                  <TextField id="outlined-basic" type="password" label="Xác nhận mật khẩu" fullWidth sx={{ my: 1 }} variant="outlined" />
                  <Button variant="contained" sx={{my: 2}} fullWidth>Đăng ký</Button>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TextField id="outlined-basic" type="email" label="Email" fullWidth sx={{ my: 1 }} variant="outlined" />
                <TextField id="outlined-basic" type="password" label="Mật khẩu" fullWidth sx={{ my: 1 }} variant="outlined" />
                <Button variant="contained" sx={{my: 2}} fullWidth>Đăng nhập</Button>
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default LoginRegister;
