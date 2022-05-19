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
import DownloadLink from "react-download-link";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Widget } from "@uploadcare/react-widget";
import "./styles.css";
// import { useState } from "react";

// ---------------------------
// Configure react-uploader...
// ---------------------------
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// // Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
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
        <Grid item xs={12}>
          <h3>Upload O3 Questions File</h3>
          <Widget publicKey="demopublickey" previewStep clearable />
        </Grid>
        <Grid mt={4}>
          <h3>Download O3 Questions File</h3>
          <DownloadLink
            className="download-btn"
            label="Download"
            filename="fileName.txt"
            exportFile={() => "Client side cache data here…"}
          />
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
