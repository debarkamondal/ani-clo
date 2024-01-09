import { animeInfoType } from "@/app/utils/types";
import Image from "next/image";
import React from "react";

type propType = {
	animeInfo: animeInfoType;
};

const AnimeInfo: React.FC<propType> = ({ animeInfo }) => {
	const htmlRegex = /<[^>]+>/g;

	return (
		<div className="flex flex-col md:flex-row gap-4 items-center">
			<Image
				src={animeInfo.image}
				alt={`${animeInfo.title.english}-image`}
				width={300}
				height={500}
				className="w-full md:w-2/5"
			/>
			<div className="md:w-3/5 flex flex-col gap-y-8">
				<h1 className="text-4xl font-bold text-center md:text-left mt-3 ">
					{animeInfo.title.english}
					<div className="md:inline-block"> ({animeInfo.releaseDate})</div>
				</h1>
				<p className="text-center md:text-left">
					{/* removes html tags within description */}
					{animeInfo.description.replaceAll(htmlRegex, "")}
				</p>
				<div>
					<span className="font-bold">{animeInfo.status}</span>:{" "}
					{animeInfo.currentEpisode}/{animeInfo.totalEpisodes}
				</div>
			</div>
		</div>
	);
};

export default AnimeInfo;
