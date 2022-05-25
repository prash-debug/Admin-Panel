import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Alert from "@mui/material/Alert";

import BasicLayout from "layouts/authentication/components/BasicLayout";
import Stack from "@mui/material/Stack";

import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function SignIn() {
  const navigate = useNavigate();
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe((prev) => !prev);
  useEffect(() => {
    if (
      localStorage.getItem("rememberMe") === "true" &&
      localStorage.getItem("email") &&
      localStorage.getItem("password")
    ) {
      navigate("/profileQuestions");
    }
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("Fill all fields");
    } else {
      localStorage.setItem("rememberMe", rememberMe.toString());
      localStorage.setItem("email", emaillog.toString());
      localStorage.setItem("password", passwordlog.toString());
      navigate("/profileQuestions");
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={(e) => handleSignIn(e)}>
                sign in
              </MDButton>
            </MDBox>
            {flag && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert variant="filled" severity="error">
                  Please enter all the details correctly
                </Alert>
              </Stack>
            )}
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default SignIn;
