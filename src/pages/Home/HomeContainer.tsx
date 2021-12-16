import React, { useState } from "react";

// Components
import { Controls } from "./components/Controls.js";
import { RepoInfo } from "./components/RepoInfo.js";
import { Separator } from "../../components/Separator";

export const HomeContainer = function () {
  const [counter, setCounter] = useState<number>(0);
  const repositoriesNames: Array<string> = [
    "eslint/eslint",
    "ziarmandhost/SuperAdmin2021",
    "babel/babel",
    "webpack/webpack",
    "storybooks/storybook",
    "facebook/react",
    "tannerlinsley/react-query",
  ];

  return (
    <div id="wrapper">
      <Controls
        counter={counter}
        setCounter={setCounter}
        repositoriesNames={repositoriesNames}
      />
      <Separator />
      <RepoInfo repo={repositoriesNames[counter]} />
    </div>
  );
};
