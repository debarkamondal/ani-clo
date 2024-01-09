import { animeListType } from "@/app/utils/types";
import Image from "next/image";
import React from "react";

type propType = {
	latestAnime: animeListType[];
};
const LatestAnime = (props: propType) => {
	let { latestAnime } = props;
	return (
		<div className="md:flex md:gap-x-5 gap-y-4 grid grid-cols-2 justify-items-center overflow-x-scroll">
			{latestAnime.map((anime) => {
				return (
					<div className="w-48 md:w-44 shrink-0" key={anime.id}>
						<Image
							src={anime.image}
							width={100}
							height={200}
							alt={anime.title.english}
							className="rounded-md sm:h-64 md:h-56 w-full object-cover"
						/>
						<p className=" my-1 text-sm line-clamp-2 md:line-clamp-1 text-center">
							{anime.title.english}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default LatestAnime;
