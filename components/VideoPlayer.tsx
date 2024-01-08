"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = () => {
	const [isClient, setIsClient] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const searchParams = useSearchParams();
	console.log(searchParams.get("episode"));
	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleKeyPress = (e: React.KeyboardEvent) => {
		switch (e.key) {
			case " ":
				setIsPlaying(!isPlaying);
				break;
		}
	};

	return (
		<div onKeyDown={handleKeyPress} className="flex justify-center">
			{isClient && (
				<ReactPlayer
					url="https://www081.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1703882952.1080.m3u8"
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
