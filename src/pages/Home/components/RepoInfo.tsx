import React, {useEffect} from "react";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import {AxiosError, AxiosResponse} from "axios";

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

export const Loading = function ({ text }: LoadingProps) {
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

interface DataInterface {
    full_name: string,
    description: string,
    stargazers_count: number
}

export const RepoInfo = function ({ repo }: RepoProps) {
  const {isError, data, isFetching, error} = useQuery<AxiosResponse<DataInterface>, AxiosError, DataInterface>(
    ["getRepoByName", repo],
    () => getRepoByName(repo),
    { retry: false }
  );

  const { t } = useTranslation();

  if (isError || typeof data === "string") {
    return (
      <Typography size={1.5}>
        Error!
        {error?.message}
      </Typography>
    );
  }

  return (
    <div style={{ maxWidth: "50%" }}>
      <Typography size={1.5}>{t("SELECTED_REPO_INFO_TITLE")}: </Typography>

      {isFetching ? (
        <Loading text={t("LOADING")} />
      ) : (
        <div style={{ border: "1px solid gray", padding: "16px" }}>
          <Typography size={1.25}>
            <b>{t("SELECTED_REPO_INFO.TITLE")}:</b> {data?.full_name}
          </Typography>{" "}
          <br />
          <Typography size={1.25}>
            <b>{t("SELECTED_REPO_INFO.DESCRIPTION")}:</b>{" "}
            {data?.description}
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={star} alt="★" style={{ width: "24px" }} />{" "}
            {data?.stargazers_count}
          </div>
        </div>
      )}
    </div>
  );
};
