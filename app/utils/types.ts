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

export type animeInfoType = {
	id: string;
	title: {
		romaji: string;
		english: string;
		native: string;
	};
	malId: number;
	synonyms: [string, string];
	isLicensed: boolean;
	isAdult: boolean;
	countryOfOrigin: string;
	trailer: {
		id: string;
		site: string;
		thumbnail: string;
		thumbnailHash: string;
	};
	image: string;
	imageHash: string;
	popularity: number;
	color: string;
	cover: string;
	coverHash: string;
	description: string;
	status: "Ongoing" | "Completed";
	releaseDate: number;
	startDate: {
		year: number;
		month: number;
		day: number;
	};
	endDate: {
		year: null;
		month: null;
		day: null;
	};
	nextAiringEpisode: {
		airingTime: number;
		timeUntilAiring: number;
		episode: number;
	};
	totalEpisodes: number;
	currentEpisode: number;
	rating: number;
	duration: number;
	genres: [string, string];
	season: string;
	studios: [string];
	subOrDub: string;
	type: string;
	recommendations: [
		{
			id: number;
			malId: number;
			title: {
				romaji: string;
				english: null;
				native: string;
				userPreferred: string;
			};
			status: string;
			episodes: number;
			image: string;
			imageHash: string;
			cover: string;
			coverHash: string;
			rating: number;
			type: string;
		},

		{
			id: number;
			malId: number;
			title: {
				romaji: string;
				english: string;
				native: string;
				userPreferred: string;
			};
			status: string;
			episodes: number;
			image: string;
			imageHash: string;
			cover: string;
			coverHash: string;
			rating: number;
			type: string;
		}
	];
	characters: [
		{
			id: number;
			role: string;
			name: {
				first: string;
				last: string;
				full: string;
				native: string;
				userPreferred: string;
			};
			image: string;
			imageHash: string;
			voiceActors: [
				{
					id: number;
					language: string;
					name: {
						first: string;
						last: string;
						full: string;
						native: string;
						userPreferred: string;
					};
					image: string;
					imageHash: string;
				}
			];
		}
	];
	relations: [
		{
			id: number;
			relationType: string;
			malId: number;
			title: {
				romaji: string;
				english: string;
				native: string;
				userPreferred: string;
			};
			status: string;
			episodes: null;
			image: string;
			imageHash: string;
			color: string;
			type: string;
			cover: string;
			coverHash: string;
			rating: number;
		}
	];
	mappings: [
		{
			id: string;
			providerId: string;
			similarity: number;
			providerType: string;
		}
	];
	artwork: [
		{
			img: string;
			type: string;
			providerId: string;
		}
	];
	episodes: episodeInfoType[];
};

export type episodeInfoType = {
	id: string;
	title: string;
	description: string;
	number: number;
	image: string;
	imageHash: string;
	airDate: string;
};
