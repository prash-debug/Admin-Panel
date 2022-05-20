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
import Grid from "@mui/material/Grid";
// import React, { useState } from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Button from "@mui/material/Button";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import { Widget } from "@uploadcare/react-widget";
import o3ProfileQuestionService from "services/o3-profile.service";
// import Footer from "examples/Footer";
// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// // Billing page components
// import PaymentMethod from "layouts/billing/components/PaymentMethod";
// import Invoices from "layouts/billing/components/Invoices";
// import BillingInformation from "layouts/billing/components/BillingInformation";
// import Transactions from "layouts/billing/components/Transactions";
import axios from "axios";

function Billing() {
  // const [selectedFile, setSelectedFile] = React.useState(null);

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
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid>
          <h3>Upload Profile Questions File</h3>
          <label htmlFor="file-upload" class="custom-file-upload">
            Custom Upload
          </label>
          <input
            id="file-upload"
            className="upload-btn"
            type="file"
            onChange={onChange}
            accept="image/*"
          />
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
