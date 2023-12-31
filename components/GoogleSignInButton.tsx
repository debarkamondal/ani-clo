"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import GoogleIcon from "../public/google.svg";

const GoogleSignInButton = () => {
	return (
		<Button variant={"outline"} size={"icon"} onClick={() => signIn("google")}>
			<Image src={GoogleIcon} alt="google icon" width={40} height={40} />
		</Button>
	);
};

export default GoogleSignInButton;
