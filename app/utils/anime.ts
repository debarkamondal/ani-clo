import {
	animeListType,
	animeInfoType,
	episodeSourceType,
} from "@/app/utils/types";
import axios from "axios";

const apiUrl = process.env.ANIME_API_URL as string;
export const getRecentAnime = async (page: number) => {
	const url = `${apiUrl}/meta/anilist/recent-episodes?page=${page}`;
	const { data } = await axios.get(url);
	return data.results as animeListType[];
};
export const getTopAiringAnime = async (page: number) => {
	const url = `${apiUrl}/meta/anilist/trending?page=${page}`;
	const { data } = await axios.get(url);
	return data.results as animeListType[];
};

export const getAnimeInfo = async (id: string) => {
	const url = new URL(`/meta/anilist/info/${id}`, apiUrl);
	const { data } = await axios.get(url.toString());
	return data as animeInfoType;
};
export const getEpisodeSources = async (episodeId: string) => {
	const url = new URL(`/meta/anilist/watch/${episodeId}`, apiUrl);
	const { data } = await axios.get(url.toString());
	return data.sources as episodeSourceType[];
};

export const searchAnime = async (searchParam: string) => {
	const url = new URL(`/meta/anilist/${searchParam}`, apiUrl);
	const { data } = await axios.get(url.toString());
	return data.results as animeListType[];
};
