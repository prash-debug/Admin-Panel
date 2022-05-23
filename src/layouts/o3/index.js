import MDBox from "components/MDBox";
import { Grid } from "@mui/material";
// import Button from "@mui/material/Button";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import "./styles.css";
import CONSTANTS from "constants";
import o3QuestionService from "services/o3-questions.service";

import { useState } from "react";

function O3() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    const url = `${CONSTANTS.URLS.BASE_URL}${CONSTANTS.URLS.O3_QUESTIONS_UPLOAD}`;
    const file = e.target.files[0];
    o3QuestionService.o3Upload(url, file);
    setText(e.target.files[0].name);
    // console.log(e.target.files[0].name);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid item>
          <h3>Upload O3 Questions File</h3>
          <label htmlFor="file-upload" className="custom-file-upload">
            Upload File
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
          <h3>Download O3 Questions </h3>
          <button
            variant="contained"
            className="download-btn"
            type="submit"
            onClick={o3QuestionService.o3Download}
          >
            Download file
          </button>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default O3;
