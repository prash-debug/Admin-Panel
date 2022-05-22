import axios from "axios";

import CONSTANTS from "../constants";

const profileQuestionsDownload = () => {
  axios({
    // url: "http://localhost:9000/profile-questions/download",
    url: `${CONSTANTS.URLS.BASE_URL}${CONSTANTS.URLS.PROFILE_QUESTIONS_DOWNLOAD}`,
    responseType: "blob",
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "profile-questions.xlsx");
    link.click();
  });
};

const o3Upload = (url, file) => {
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

const o3ProfileQuestionService = {
  profileQuestionsDownload,
  o3Upload,
};

export default o3ProfileQuestionService;
