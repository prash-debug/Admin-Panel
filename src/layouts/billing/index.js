import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
import Button from "@mui/material/Button";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import o3ProfileQuestionService from "services/o3-profile.service";

import axios from "axios";
import { useState } from "react";

function Billing() {
  const [text, setText] = useState("");

  const uploadFile = (url, file) => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .put(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange = (e) => {
    const url = "http://localhost:9000/profile-questions/upload";
    const file = e.target.files[0];
    uploadFile(url, file);
    setText(e.target.files[0].name);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid>
          <h3>Upload Profile Questions File</h3>
          <label htmlFor="file-upload" className="custom-file-upload">
            Custom Upload
            <input
              id="file-upload"
              className="upload-btn"
              type="file"
              onChange={(e) => onChange(e)}
            />
          </label>
          <span>{text}</span>
          {/* <input className="upload-btn" type="file" onChange={onChange} accept="image/*" /> */}
          {/* <Widget publicKey="demopublickey" previewStep clearable onChange={onChange} /> */}
        </Grid>
        <Grid mt={4}>
          <h3>Download Profile Questions File</h3>
          <Button
            variant="contained"
            className="download-btn"
            type="submit"
            onClick={o3ProfileQuestionService.profileQuestionsDownload}
          >
            Download file
          </Button>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Billing;
