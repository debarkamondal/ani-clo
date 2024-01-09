const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "artworks.thetvdb.com",
			},
			{
				hostname: "media.kitsu.io",
			},
			{
				hostname: "s4.anilist.co",
			},
		],
	},
};

module.exports = nextConfig;
