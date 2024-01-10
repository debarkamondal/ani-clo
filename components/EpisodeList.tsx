import { episodeInfoType } from "@/app/utils/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface propType {
	episodes: episodeInfoType[];
	currentEpisode?: string;
}
const EpisodeList: React.FC<propType> = (props) => {
	return (
		<>
			<h2 className="text-2xl my-4 text-center font-semibold underline underline-offset-4">
				Episodes
			</h2>
			<div className="grid grid-cols-3 gap-2">
				{props.episodes.map((episode, index) => {
					return (
						<Link
							href={`?${new URLSearchParams({ episodeId: episode.id })}`}
							key={episode.id}
							className={cn(
								"border-2 p-2 rounded-md text-center",
								props.currentEpisode === episode.id
									? "border-primary"
									: "border-border"
							)}
						>
							Episode {episode.number}
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default EpisodeList;
