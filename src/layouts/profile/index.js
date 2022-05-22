import Grid from "@mui/material/Grid";

import MDBox from "components/MDBox";
// import Button from "@mui/material/Button";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import o3ProfileQuestionService from "services/o3-profile.service";

import { useState } from "react";
import CONSTANTS from "constants";

function Profile() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    const url = `${CONSTANTS.URLS.BASE_URL}${CONSTANTS.URLS.PROFILE_QUESTIONS_UPLOAD}`;
    const file = e.target.files[0];
    o3ProfileQuestionService.o3Upload(url, file);
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
        </Grid>
        <Grid mt={4}>
          <h3>Download Profile Questions File</h3>
          <button
            variant="contained"
            className="download-btn"
            type="submit"
            onClick={o3ProfileQuestionService.profileQuestionsDownload}
          >
            Download file
          </button>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Profile;
