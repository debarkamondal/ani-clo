import {
	animeListType,
	animeInfoType,
	episodeSourceType,
} from "@/app/utils/types";
import axios from "axios";

const apiUrl = process.env.ANIME_API_URL as string;
export const getRecentAnime = async (page: number) => {
	const url = `${apiUrl}/anime/gogoanime/recent-episodes?page=${page}`;
	const { data } = await axios.get(url);
	return data.results as animeListType[];
};
export const getTopAiringAnime = async (page: number) => {
	const url = `${apiUrl}/anime/gogoanime/top-airing?page=${page}`;
	const { data } = await axios.get(url);
	return data.results as animeListType[];
};

export const getAnimeInfo = async (id: string) => {
	const url = new URL(`/anime/gogoanime/info/${id}`, apiUrl);
	const { data } = await axios.get(url.toString());
	return data as animeInfoType;
};
export const getEpisodeSources = async (episodeId: string) => {
	const url = new URL(`/meta/anilist/watch/${episodeId}`, apiUrl);
	const { data } = await axios.get(url.toString());
	return data.sources as episodeSourceType[];
};

export const searchAnime = async (searchParam: string, page = 1) => {
	const url = new URL(`/anime/gogoanime/${searchParam}?page=${page}`, apiUrl);
	const { data } = await axios.get(url.toString());
	return data.results as animeListType[];
};
