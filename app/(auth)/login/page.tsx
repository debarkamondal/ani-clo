import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GithubIcon } from "lucide-react";
import GoogleIcon from "../../../public/google.svg";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
	return (
		<div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
			<form>
				<h1 className="text-3xl font-semibold font-white">Log In</h1>
				<div className="space-y-4 mt-5">
					<Input
						type="email"
						name="email"
						placeholder="Email"
						className="bg-neutral-800 placeholder:text-xs placeholder:text-grey-400 w-full inline-block"
					/>
					<Button
						type="submit"
						variant={"destructive"}
						className="w-full bg-red-700"
					>
						Log In
					</Button>
				</div>
			</form>
			<div className="text-gray-500 text-sm mt-2">
				New to netflix?{" "}
				<Link href="/signup" className="text-white hover:underline">
					Create account!
				</Link>
			</div>
			<div className="flex w-full justify-center items-center gap-x-3 mt-6">
				<Button variant={"outline"} size={"icon"}>
					<GithubIcon />
				</Button>
				<Button variant={"outline"} size={"icon"}>
					<Image src={GoogleIcon} alt="google icon" width={40} height={40} />
				</Button>
			</div>
		</div>
	);
};

export default Login;