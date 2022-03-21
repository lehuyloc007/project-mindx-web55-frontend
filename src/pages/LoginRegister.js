import { useState } from "react";
import { Container, Box, Grid, Tabs, Tab, TextField, Button } from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import http from "../ultis/axios"
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
          {children}
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

  const [valesInput, setValuesInput] = useState({
    email: "",
    password: "",
    displayName: "",
    confimPassword: "",
    emailLogin: "",
    passwordLogin: ""
  })
  const handleChangeValuesInput = (event) => {
    setValuesInput((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }
  const handelSubmitLogin = (event) => {
    event.preventDefault();
    http.post('/auth/login');
  }

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
                  <TextField onChange={handleChangeValuesInput} name="email" defaultValue={valesInput.email} type="email" label="Email" fullWidth sx={{ my: 1 }} variant="outlined" />
                  <TextField onChange={handleChangeValuesInput} name="displayName" defaultValue={valesInput.displayName} type="text" label="Họ và Tên" fullWidth sx={{ my: 1 }} variant="outlined" />
                  <TextField onChange={handleChangeValuesInput} name="password" defaultValue={valesInput.password} type="password" label="Mật khẩu" fullWidth sx={{ my: 1 }} variant="outlined" />
                  <TextField onChange={handleChangeValuesInput} name="confimPassword" defaultValue={valesInput.confimPassword} type="password" label="Xác nhận mật khẩu" fullWidth sx={{ my: 1 }} variant="outlined" />
                  <Button variant="contained" sx={{ my: 2 }} fullWidth>Đăng ký</Button>
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1} onSubmit={handelSubmitLogin}>
                <Box component="form" fullWidth>
                  <TextField onChange={handleChangeValuesInput} name="emailLogin" defaultValue={valesInput.emailLogin} type="email" label="Email" fullWidth sx={{ my: 1 }} variant="outlined" />
                  <TextField onChange={handleChangeValuesInput} name="passwordLogin" defaultValue={valesInput.passwordLogin} type="password" label="Mật khẩu" fullWidth sx={{ my: 1 }} variant="outlined" />
                  <Button variant="contained" type="submit" sx={{ my: 2 }} fullWidth>Đăng nhập</Button>
                </Box>
              </TabPanel>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
};
export default LoginRegister;
