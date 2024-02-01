export type animeListType = {
	id: string;
	title: string;
	image: string;
	url: string;
	genres: string[];
};

export type episodeSourceType = {
	url: string;
	isM3U8: boolean;
	quality: string;
};

export type animeInfoType = {
	id: string;
	title: string;
	url: string;
	genres: string[];
	totalEpisodes: number;
	image: string;
	releaseDate: string;
	description: string;
	subOrDub: string;
	type: string;
	status: string;
	otherName: string;
	episodes: episodeInfoType[];
};

export type episodeInfoType = {
	id: string;
	episode: number;
	url: string;
};
