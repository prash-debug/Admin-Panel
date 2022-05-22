import axios from "axios";

import CONSTANTS from "../constants";

const profileQuestionsDownload = () => {
  axios({
    url: "http://localhost:9000/profile-questions/download",
    responseType: "blob",
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "profile-questions.xlsx");
    link.click();
  });
};

const o3Upload = (event) => {
  const file = event.target.files[0];
  const data = new FormData();
  data.append("file", file);
  axios
    .post(CONSTANTS.URLS.O3_QUESTIONS_UPLOAD, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => alert(res));
};

const o3ProfileQuestionService = {
  profileQuestionsDownload,
  o3Upload,
};

export default o3ProfileQuestionService;
