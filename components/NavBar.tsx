"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/ani-clo_logo.png";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import UserNav from "./UserNav";
import SearchBar from "./SearchBar";

interface linkProps {
	name: string;
	href: string;
}

const links: linkProps[] = [
	{ name: "Home", href: "/home" },
	{ name: "Tv Shows", href: "/home/shows" },
	{ name: "Movies", href: "/home/movies" },
	{ name: "Recently Added", href: "/home/recently" },
	{ name: "My List", href: "/home/user/list" },
];

const NavBar = () => {
	const pathName = usePathname();
	return (
		<div className="w-full max-w-7xl items-center flex justify-between mx-auto px-5 sm:px-6 py-5">
			<div className="flex items-center">
				<Link href={"/home"} className="w-32">
					<Image src={Logo} alt="netflix logo" priority />
				</Link>
				<ul className="lg:flex gap-x-4 ml-14 hidden">
					{links.map((link, idx) => (
						<div key={idx}>
							{pathName === link.href ? (
								<li>
									<Link
										href={link.href}
										className="text-white font-semibold underline text-sm"
									>
										{link.name}
									</Link>
								</li>
							) : (
								<li>
									<Link
										className="text-gray-300 font-normal text-sm"
										href={link.href}
									>
										{link.name}
									</Link>
								</li>
							)}
						</div>
					))}
				</ul>
			</div>
			<div className="flex gap-x-10 items-center">
				<SearchBar />
				<Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
				<UserNav />
			</div>
		</div>
	);
};

export default NavBar;
