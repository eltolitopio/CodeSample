import React from "react";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

// API
import { getRepoByName } from "../../../api";

// Styles
import { Typography } from "../../../components/Typography";

// Assets
import star from "../../../assets/images/star.png";
import spinner from "../../../assets/images/spiner.gif";

interface LoadingProps {
  text: string;
}

const Loading = function ({ text }: LoadingProps) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={spinner} alt="*" style={{ width: "24px" }} />
      <Typography size={1.25}>{text}</Typography>
    </div>
  );
};

interface RepoProps {
  repo: string;
}

export const RepoInfo = function ({ repo }: RepoProps) {
  const result: any = useQuery(
    ["getRepoByName", repo],
    () => getRepoByName(repo),
    { retry: false }
  );

  const { t } = useTranslation();

  if (result.isError || typeof result?.data === "string") {
    return (
      <Typography size={1.5}>
        Error!
        {result?.error?.message}
      </Typography>
    );
  }

  return (
    <div style={{ maxWidth: "50%" }}>
      <Typography size={1.5}>{t("SELECTED_REPO_INFO_TITLE")}: </Typography>

      {result?.isFetching ? (
        <Loading text={t("LOADING")} />
      ) : (
        <div style={{ border: "1px solid gray", padding: "16px" }}>
          <Typography size={1.25}>
            <b>{t("SELECTED_REPO_INFO.TITLE")}:</b> {result?.data?.full_name}
          </Typography>{" "}
          <br />
          <Typography size={1.25}>
            <b>{t("SELECTED_REPO_INFO.DESCRIPTION")}:</b>{" "}
            {result?.data?.description}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={star} alt="★" style={{ width: "24px" }} />{" "}
            {result?.data?.stargazers_count}
          </div>
        </div>
      )}
    </div>
  );
};
