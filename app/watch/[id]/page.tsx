import { getAnimeInfo } from "@/app/utils/anime";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";

const watch = async ({ params }: { params: { id: string } }) => {
	const animeInfo = await getAnimeInfo(params.id);
	return (
		<div className="px-8">
			<VideoPlayer />
			<h1 className="text-3xl font-semibold my-2">{animeInfo.title}</h1>
			<h2 className="text-2xl text-center w-full font-medium mb-5">Episodes</h2>
			<div className="grid grid-cols-12">
				{animeInfo.episodes.map((episode) => {
					return (
						<span
							key={episode.id}
							className="w-16 h-12 border-2 border-border rounded-md flex justify-center items-center"
						>
							Ep {episode.number.toString()}
						</span>
					);
				})}
			</div>
		</div>
	);
};

export default watch;
