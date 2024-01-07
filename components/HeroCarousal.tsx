"use client";
import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Anime } from "@/lib/types";
import Image from "next/image";
import { MonitorPlay } from "lucide-react";
import { Button } from "./ui/button";

type propType = {
	topAnime: Anime[];
};
const HeroCarousal = (props: propType) => {
	const { topAnime } = props;
	return (
		<Carousel className="w-full p-2" plugins={[Autoplay({ delay: 3000 })]}>
			<CarouselContent>
				{topAnime.map((anime) => {
					return (
						<CarouselItem
							className="flex gap-x-8 flex-col md:flex-row gap-y-3 text-center md:text-start"
							key={anime.id}
						>
							<Image
								src={anime.image}
								alt={anime.title}
								width={300}
								height={400}
								className="rounded-md h-[34rem] w-96 self-center"
							/>
							<div className="md:w-7/12 flex flex-col justify-evenly items-center md:items-start gap-y-3">
								<h1 className="text-4xl font-medium leading-normal line-clamp-3">
									{anime.title}
								</h1>
								<Button className="w-48 text-base">
									Watch Now <MonitorPlay className="mx-3" />
								</Button>
							</div>
						</CarouselItem>
					);
				})}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default HeroCarousal;
