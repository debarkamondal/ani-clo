import { getAnimeInfo, getEpisodeSources } from "@/app/utils/anime";
import AnimeInfo from "@/components/AnimeInfo";
import EpisodeList from "@/components/EpisodeList";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";

const watch = async ({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
}) => {
	const animeInfo = await getAnimeInfo(params.id);
	let episodeSources;
	if (searchParams.episodeId) {
		episodeSources = await getEpisodeSources(searchParams.episodeId as string);
	}
	return (
		<>
			{!searchParams.episodeId && <AnimeInfo animeInfo={animeInfo} />}
			{episodeSources && <VideoPlayer sources={episodeSources} />}
			<h1 className="text-3xl font-bold m-4">{animeInfo.title}</h1>
			<EpisodeList
				episodes={animeInfo.episodes}
				currentEpisode={searchParams.episodeId as string}
			/>
		</>
	);
};

export default watch;
