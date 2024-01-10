"use client";
import { episodeSourceType } from "@/app/utils/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

type propsType = { sources: episodeSourceType[] };
const VideoPlayer: React.FC<propsType> = ({ sources }) => {
	const [isClient, setIsClient] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		setIsClient(true);
		return () => setIsClient(false);
	}, []);

	const handleKeyPress = (e: React.KeyboardEvent) => {
		switch (e.key) {
			case " ":
				setIsPlaying(!isPlaying);
				break;
		}
	};

	const streamUrl = sources.filter((source) => source.quality === "1080p")[0];
	console.log(streamUrl);
	return (
		<div onKeyDown={handleKeyPress} className="flex justify-center">
			{isClient && (
				<ReactPlayer
					url={streamUrl.url}
					controls
					playing={isPlaying}
					height={540}
					width={960}
				/>
			)}
		</div>
	);
};

export default VideoPlayer;
