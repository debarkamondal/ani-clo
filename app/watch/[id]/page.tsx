import { getAnimeInfo } from "@/app/utils/anime";
import AnimeInfo from "@/components/AnimeInfo";
import EpisodeList from "@/components/EpisodeList";
import React from "react";

const watch = async ({ params }: { params: { id: string } }) => {
	const animeInfo = await getAnimeInfo(params.id);
	console.log(Number("a"));
	return (
		<>
			<AnimeInfo animeInfo={animeInfo} />
			<EpisodeList episodes={animeInfo.episodes} />
		</>
	);
};

export default watch;
