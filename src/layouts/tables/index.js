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

// import { useState } from "react";

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
  // const uploadFile = (url, file) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   axios
  //     .put(url, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const onChange = (e) => {
    // var name = e.target.files[0].name;
    // const url = "http://localhost:9000/o3-questions/upload";
    const url = `${CONSTANTS.URLS.BASE_URL}${CONSTANTS.URLS.O3_QUESTIONS_UPLOAD}`;
    const file = e.target.files[0];
    o3QuestionService.o3Upload(url, file);
    // console.log(e.target.files[0].name);
  };
  // const onDownload = () => {
  //   const link = document.createElement("a");
  //   link.download = `download.txt`;
  //   link.href = "./download.txt";
  //   link.click();
  // };
  // const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();

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
              accept="image/*"
            />
          </label>

          {/* <Widget publicKey="demopublickey" previewStep clearable onChange={onChange} /> */}
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
      {/* <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Authors Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Projects Table
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox> */}
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
