import axios from "axios";
// import axiosConfig from "../configs/axios-config";
import CONSTANTS from "../constants";
// import translations from "../utils/translation";

// const o3Axios = axios.create({ ...axiosConfig });

const o3Download = () => {
  console.log("download called api");
  //   o3Axios.get(CONSTANTS.URLS.O3_QUESTIONS_DOWNLOAD).then((res) => res.data);
  axios({
    url: `${CONSTANTS.URLS.BASE_URL}${CONSTANTS.URLS.O3_QUESTIONS_DOWNLOAD}`,
    responseType: "blob",
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "o3-questions.xlsx");
    link.click();
  });
};

const o3Upload = (url, file) => {
  // o3Axios.put(CONSTANTS.URLS.O3_QUESTIONS_UPLOAD, file).then((res) => res.data);
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

const o3QuestionService = {
  o3Download,
  o3Upload,
};

export default o3QuestionService;
