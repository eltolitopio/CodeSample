import axios from "axios";

export const getReposList = () =>
  axios.get("http://localhost:5000/getReposList").then((data) => data.data);

export const getRepoByName = (repositoryName: string) =>
  axios
    .get(`https://api.github.com/repos/${repositoryName}`)
    .then((data) => data.data);
