import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const server = express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(cors());

const getDataFromDB = (): Array<string> => [
	"eslint/eslint",
	"ziarmandhost/SuperAdmin2021",
	"babel/babel",
	"webpack/webpack",
	"storybooks/storybook",
	"facebook/react",
	"tannerlinsley/react-query",
];

server.get("/getReposList", (req, res) => {
	res.json({repositoriesNames: getDataFromDB()});
});

server.listen(PORT, (err?: any) => {
	if (err) throw err;
	console.log(`Ready on http://localhost:${PORT}`);
});