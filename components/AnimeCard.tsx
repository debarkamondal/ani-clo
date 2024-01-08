import { Anime } from "@/lib/types";
import Image from "next/image";
import React from "react";

type propType = {
	latestAnime: Anime[];
};
const AnimeCard = (props: propType) => {
	const { latestAnime } = props;
	return (
		<div className="flex gap-x-5 overflow-x-scroll">
			{latestAnime.map((anime) => {
				return (
					<div className="w-44 shrink-0" key={anime.id}>
						<Image
							src={anime.image}
							width={100}
							height={200}
							alt={anime.title}
							className="rounded-md h-56 w-full object-cover"
						/>
						<p className=" my-1 text-sm line-clamp-1">{anime.title}</p>
					</div>
				);
			})}
		</div>
	);
};

export default AnimeCard;
