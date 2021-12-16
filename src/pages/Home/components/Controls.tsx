import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

// Styles
import { Button } from "../../../components/Button";
import { Typography } from "../../../components/Typography";
import { List, Option } from "../../../components/List";

// Assets
import uaFlag from "../../../assets/images/ua.png";
import enFlag from "../../../assets/images/en.png";

interface ControlsProps {
  repositoriesNames: Array<string>;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const Controls = function ({
  repositoriesNames,
  counter,
  setCounter,
}: ControlsProps) {
  const { t, i18n } = useTranslation();

  const nextRepo = useCallback(() => {
    if (counter < repositoriesNames?.length - 1)
      setCounter((prevCounter) => prevCounter + 1);
    else setCounter(0);
  }, [repositoriesNames, counter]);
  const prevRepo = useCallback(() => {
    if (counter >= 1) setCounter((prevCounter) => prevCounter - 1);
  }, [counter]);

  const changeLang = (lang: string) => i18n.changeLanguage(lang);

  return (
    <div>
      <div>
        <div>
          <img
            onClick={() => changeLang("ua")}
            src={uaFlag}
            alt="UA"
            style={{ cursor: "pointer", width: "24px", marginRight: "16px" }}
          />
          <img
            onClick={() => changeLang("en")}
            src={enFlag}
            alt="UK"
            style={{ cursor: "pointer", width: "24px" }}
          />
        </div>
        <Typography size={1.5} mb={2}>
          {t("REPO_LIST_TITLE")}:
        </Typography>
        <List mb={2}>
          {repositoriesNames.map((repo, index) => {
            const isActive = counter === index;

            return (
              <Option key={index} isActive={isActive}>
                {repo}
              </Option>
            );
          })}
        </List>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {counter !== 0 && (
          <Button dark mr={3} onClick={prevRepo}>
            {t("BUTTONS.PREV")}
          </Button>
        )}
        <Button dark onClick={nextRepo}>
          {t("BUTTONS.NEXT")}
        </Button>
      </div>
    </div>
  );
};
