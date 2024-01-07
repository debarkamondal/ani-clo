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
	latestThree: Anime[];
};

const HeroCarousal = (props: propType) => {
	const { latestThree } = props;
	return (
		<Carousel className="w-full" plugins={[Autoplay({ delay: 3000 })]}>
			<CarouselContent>
				{latestThree.map((anime) => {
					return (
						<CarouselItem className="flex gap-x-8" key={anime.id}>
							<Image
								src={anime.image}
								alt={anime.title}
								width={300}
								height={400}
								className="rounded-md"
							/>
							<div className="w-7/12 flex flex-col justify-evenly">
								<h1 className="text-4xl font-medium leading-normal">
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
