export type animeListType = {
	id: string;
	title: {
		romaji: string;
		english: string;
		native: string;
	};
	image: string;
	type: string;
	rating: number;
	releaseDate: string;
};

export type AnimeInfo = {
	id: string;
	title: string;
	url: string;
	image: string;
	releaseDate: string; // or null
	description: string; // or null
	genres: [string];
	subOrDub: "sub" | "dub";
	type: string; // or null
	status: "Ongoing" | "Completed";
	otherName: string; // or null
	totalEpisodes: Number;
	episodes: [
		{
			id: string;
			number: Number;
			url: string;
		}
	];
};
