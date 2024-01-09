"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

const VideoPlayer = () => {
	const [isClient, setIsClient] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const pathname = usePathname();
	const { replace } = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const params = new URLSearchParams(searchParams);
		setIsClient(true);
		params.set("episode", "1");
		replace(`${pathname}?${params.toString()}`);
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
					url="https://www094.vipanicdn.net/streamhls/03d55c63f2e61b800619b80a028fcc8a/ep.1.1704736725.1080.m3u8"
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
