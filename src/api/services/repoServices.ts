import axios from "axios";

export const getRepoByName = async (repositoryName: string) =>
  new Promise((resolve, reject) => {
    try {
      axios
        .get(`https://api.github.com/repos/${repositoryName}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      console.error("Error in getRepoByName. Error:\n", error);
      reject(error);
    }
  });
