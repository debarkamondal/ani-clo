import HeroCarousal from "@/components/HeroCarousal";
import React from "react";
import { getPopularAnime, getTopAiringAnime } from "../utils/anime";
import AnimeCard from "@/components/AnimeCard";

const home = async () => {
	const popularAnime = await getPopularAnime(1);
	const topAiringAnime = await getTopAiringAnime(1);
	return (
		<div className="w-full">
			<HeroCarousal topAnime={topAiringAnime.slice(0, 5)} />
			<h1 className="text-3xl m-4 underline underline-offset-4">
				Popular Anime
			</h1>
			<div className="md:flex md:gap-x-5 p-2 md:p-0 gap-y-4 grid grid-cols-2 justify-items-center overflow-x-scroll">
				{popularAnime.map((anime) => {
					return <AnimeCard anime={anime} key={anime.id} />;
				})}
			</div>
		</div>
	);
};

export default home;
