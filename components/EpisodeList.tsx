import { episodeInfoType } from "@/app/utils/types";
import React from "react";

interface propType {
	episodes: episodeInfoType[];
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
						<span
							key={episode.id}
							className="border-2 p-2 rounded-md text-center border-border"
						>
							Episode {episode.number}
						</span>
					);
				})}
			</div>
		</>
	);
};

export default EpisodeList;
