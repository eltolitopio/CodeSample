import axios from "axios";

export const getRepoByName = (repositoryName: string) =>
	axios.get(`https://api.github.com/repos/${repositoryName}`);
