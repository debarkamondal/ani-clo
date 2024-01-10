import { searchAnime } from "@/app/utils/anime";
import AnimeCard from "@/components/AnimeCard";
import React from "react";

const searchPage = async ({ params }: { params: { id: string } }) => {
	const result = await searchAnime(params.id);
	return (
		<div className="flex flex-col ">
			<h1 className="text-4xl text-center my-3">
				Search Results for &#39;{decodeURI(params.id)}&#39;
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-2 items-stretch">
				{result.map((anime) => {
					return (
						anime.title.romaji && <AnimeCard anime={anime} key={anime.id} />
					);
				})}
			</div>
		</div>
	);
};

export default searchPage;
