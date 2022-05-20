/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
// @mui material components
import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  // const [signUp, setSignUp] = useState(false);
  // const handleClick = () => {
  //   localStorage.setItem("names", names.value);
  //   localStorage.setItem("email", email.value);
  //   localStorage.setItem("password", password.value);
  // };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                id="name"
                variant="standard"
                fullWidth
                onChange={(event) => setName(event.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                id="email"
                variant="standard"
                fullWidth
                onChange={(event) => setEmail(event.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                id="password"
                variant="standard"
                fullWidth
                onChange={(event) => setPassword(event.target.value)}
              />
            </MDBox>
            {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={(e) => {
                  e.preventDefault();
                  if (!name || !email || !password) {
                    setFlag(true);
                    // console.log(flag);
                  } else {
                    setFlag(false);
                    // setSignUp(true);
                    localStorage.setItem("SubmissionName", JSON.stringify(name));
                    localStorage.setItem("SubmissionEmail", JSON.stringify(email));
                    localStorage.setItem("SubmissionPassword", JSON.stringify(password));
                    console.log("Saved in Local Storage");
                    navigate("/o3Questions");
                  }
                  // console.log("entered onClick", e);
                }}
                // onClick={(name, email, password) => {
                //   console.log("entered sign up");
                //   localStorage.setItem("name", name.value);
                //   localStorage.setItem("email", email.value);
                //   localStorage.setItem("password", password.value);
                // }}
              >
                sign up
              </MDButton>
            </MDBox>
            {flag && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="error">
                  Please enter all the details correctly
                </Alert>
              </Stack>
            )}
            {/* {signUp && (
              <Alert variant="filled" severity="success">
                Signed Up Successfully!
              </Alert>
            )} */}
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
