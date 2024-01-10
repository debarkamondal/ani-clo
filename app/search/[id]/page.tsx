import { searchAnime } from "@/app/utils/anime";
import AnimeCard from "@/components/AnimeCard";
import React from "react";

const searchPage = async ({ params }: { params: { id: string } }) => {
	const result = await searchAnime(params.id);
	console.log(result);
	return (
		<div className="flex flex-col justify-items-center">
			<h1 className="text-4xl text-center my-3">
				Search Results for '{decodeURI(params.id)}'
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
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
