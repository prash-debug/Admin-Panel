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

// @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// // Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import Button from "@material-ui/core/Button";
// Material Dashboard 2 React example components
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import { Widget } from "@uploadcare/react-widget";
import "./styles.css";
import CONSTANTS from "constants";
import o3QuestionService from "services/o3-questions.service";
// import axios from "axios";

import { useState } from "react";

// ---------------------------
// Configure react-uploader...
// ---------------------------
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";
// import Stack from "@mui/material/Stack";
// // Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    const url = `${CONSTANTS.URLS.BASE_URL}${CONSTANTS.URLS.O3_QUESTIONS_UPLOAD}`;
    const file = e.target.files[0];
    // console.log(file);
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
            Custom Upload
            <input
              id="file-upload"
              className="upload-btn"
              type="file"
              onChange={(e) => onChange(e)}
            />
          </label>
          <span>{text}</span>
          {/* <Widget publicKey="demopublickey" previewStep clearable onChange={(e) => onChange(e)} /> */}
        </Grid>
        <Grid mt={4}>
          <h3>Download O3 Questions </h3>
          <Button
            variant="contained"
            className="download-btn"
            type="submit"
            onClick={o3QuestionService.o3Download}
          >
            Download file
          </Button>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
