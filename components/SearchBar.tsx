import { Search } from "lucide-react";
import React, { KeyboardEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
	const pathname = usePathname().split("/");
	const [searchParam, setSearchParam] = useState(
		decodeURI(pathname[pathname.length - 1])
	);
	const [isClicked, setIsClicked] = useState(false);
	const router = useRouter();
	const handleClick = () => router.push(`/search/${searchParam}`);

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		switch (e.code) {
			case "Enter":
				handleClick();
				setIsClicked(false);
				break;
			case "Escape":
				setIsClicked(false);
			default:
				break;
		}
	};

	return (
		<>
			{!isClicked && (
				<Search
					className="w-5 h-5 text-gray-300 cursor-pointer"
					onClick={() => setIsClicked(true)}
				/>
			)}
			{isClicked && (
				<div
					className="md:contents absolute left-0 top-0 flex justify-center items-center bg-background/85 w-screen h-screen backdrop-blur z-10"
					onClick={() => setIsClicked(false)}
				>
					<div className="absolute md:static flex gap-x-2 bg-muted p-2 rounded-md ">
						<input
							type="text"
							placeholder="Search"
							className="bg-muted outline-none"
							value={searchParam}
							onChange={(e) => setSearchParam(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
						<Search
							className="w-5 h-5 text-gray-300 cursor-pointer"
							onClick={handleClick}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default SearchBar;
