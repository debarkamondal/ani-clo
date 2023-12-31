"use client";
import React from "react";
import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const GithubSignInButton = () => {
	return (
		<Button variant={"outline"} size={"icon"} onClick={() => signIn("github")}>
			<GithubIcon />
		</Button>
	);
};

export default GithubSignInButton;
