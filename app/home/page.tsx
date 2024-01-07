import HeroCarousal from "@/components/HeroCarousal";
import React from "react";
import { getRecentAnime } from "../utils/anime";

const home = async () => {
	const recentAnime = await getRecentAnime();
	return (
		<div className="w-full">
			<HeroCarousal latestThree={recentAnime.slice(0, 3)} />
		</div>
	);
};

export default home;
