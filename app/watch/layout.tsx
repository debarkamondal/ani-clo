import NavBar from "@/components/NavBar";
import React from "react";

const WatchLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<NavBar />
			<main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
				{children}
			</main>
		</>
	);
};

export default WatchLayout;
