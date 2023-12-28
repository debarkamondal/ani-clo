import Image from "next/image";
import React from "react";
import BgImg from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative h-screen w-screen flex flex-col md:items-center md:justify-center md:bg-transparent">
			<Image
				src={BgImg}
				alt="netflix image"
				className="hidden sm:flex sm:object-cover -z-10 brightness-50"
				fill
				priority
			/>
			<Image
				src={Logo}
				alt="netflix logo"
				width={120}
				height={120}
				className="absolute z-10 left-4 top-4 object-contain md:left-10 md:top-6"
				priority
			/>
			{children}
		</div>
	);
};

export default AuthLayout;
