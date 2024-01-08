import { Anime, AnimeInfo } from "@/lib/types";
import axios from "axios";

const apiUrl = process.env.ANIME_API_URL as string;
export const getRecentAnime = async () => {
	const url = `${apiUrl}/anime/gogoanime/recent-episodes`;
	const { data } = await axios.get(url);
	return data.results as Anime[];
};
export const getTopAiringAnime = async () => {
	const url = `${apiUrl}/anime/gogoanime/top-airing`;
	const { data } = await axios.get(url);
	return data.results as Anime[];
};

export const getAnimeInfo = async (id: string) => {
	const url = new URL(`/anime/gogoanime/info/${id}`, apiUrl);
	const { data } = await axios.get(url.toString());
	return data as AnimeInfo;
};
