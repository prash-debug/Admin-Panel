import axios from "axios";
import axiosConfig from "../configs/axios-config";
import CONSTANTS from "../constants";
// import translations from "../utils/translation";

const o3Axios = axios.create({ ...axiosConfig });

const o3Download = () => {
  console.log("download called api");
  //   o3Axios.get(CONSTANTS.URLS.O3_QUESTIONS_DOWNLOAD).then((res) => res.data);
  axios({
    url: "http://localhost:9000/o3-questions/download",
    responseType: "blob", // important
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "o3-questions.xlsx");
    link.click();
  });
};

const o3Upload = (file) =>
  o3Axios.put(CONSTANTS.URLS.O3_QUESTIONS_UPLOAD, file).then((res) => res.data);

const o3QuestionService = {
  o3Download,
  o3Upload,
};

export default o3QuestionService;
