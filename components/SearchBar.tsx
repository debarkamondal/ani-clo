import { Search } from "lucide-react";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
	const pathname = usePathname().split("/");
	const [searchParam, setSearchParam] = useState(
		decodeURI(pathname[pathname.length - 1])
	);
	const router = useRouter();
	const handleClick = () => router.push(`/search/${searchParam}`);
	return (
		<div className="md:contents absolute left-0 top-0 flex justify-center items-center bg-background/85 w-screen h-screen backdrop-blur">
			<div className="absolute md:static flex gap-x-2 bg-muted p-2 rounded-md ">
				<input
					type="text"
					placeholder="Search"
					className="bg-muted outline-none"
					value={searchParam}
					onChange={(e) => setSearchParam(e.target.value)}
					onKeyDown={(key) => key.code === "Enter" && handleClick()}
				/>
				<Search
					className="w-5 h-5 text-gray-300 cursor-pointer"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default SearchBar;
