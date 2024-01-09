import HeroCarousal from "@/components/HeroCarousal";
import React from "react";
import { getRecentAnime, getTopAiringAnime } from "../utils/anime";
import LatestAnime from "@/components/LatestAnime";

const home = async () => {
	const recentAnime = await getRecentAnime(1);
	const topAiringAnime = await getTopAiringAnime(1);
	return (
		<div className="w-full">
			<HeroCarousal topAnime={topAiringAnime.slice(0, 5)} />
			<h1 className="text-3xl m-4 underline underline-offset-4">
				Latest Anime
			</h1>
			<LatestAnime latestAnime={recentAnime} />
		</div>
	);
};

export default home;
