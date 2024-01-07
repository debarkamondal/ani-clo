import HeroCarousal from "@/components/HeroCarousal";
import React from "react";
import { getRecentAnime, getTopAiringAnime } from "../utils/anime";
import AnimeCard from "@/components/AnimeCard";

const home = async () => {
	const recentAnime = await getRecentAnime();
	const topAiringAnime = await getTopAiringAnime();
	return (
		<div className="w-full">
			<HeroCarousal topAnime={topAiringAnime.slice(0, 5)} />
			<h1 className="text-4xl my-4 underline underline-offset-4">
				Latest Anime
			</h1>
			<AnimeCard latestAnime={recentAnime} />
		</div>
	);
};

export default home;
