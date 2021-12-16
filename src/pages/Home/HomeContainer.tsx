import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useQuery} from "react-query";
import {AxiosError, AxiosResponse} from "axios";

// API
import {getRepoByName} from "../../api";

// Components
import {Controls} from "./components/Controls";
import {Loading, RepoInfo} from "./components/RepoInfo";
import {Separator} from "../../components/Separator";
import {Typography} from "../../components/Typography";
import {getReposList} from "../../api/services/repoServices";

interface DataInterface {
    repositoriesNames: Array<string>
}

export const HomeContainer = function () {
	const [counter, setCounter] = useState<number>(0);

	const {isError, data = {repositoriesNames: []}, isFetching, error} = useQuery<AxiosResponse<DataInterface>, AxiosError, DataInterface>(
		"getReposList",
		() => getReposList(),
		{retry: false}
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
		isFetching ? (
			<Loading text={t("LOADING")}/>
		) : (
			<div id="wrapper">
				<Controls
					counter={counter}
					setCounter={setCounter}
					repositoriesNames={data?.repositoriesNames}
				/>
				<Separator/>
				<RepoInfo repo={data?.repositoriesNames[counter]}/>
			</div>
		)
	);
};
