import GithubSignInButton from "@/components/GithubSignInButton";
import GoogleSignInButton from "@/components/GoogleSignInButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import React from "react";

const Signup = () => {
	return (
		<div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14 flex flex-col items-center w-full">
			<form>
				<h1 className="text-3xl font-semibold font-white">Sign Up</h1>
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
				Already have an account?{" "}
				<Link href="/login" className="text-white hover:underline">
					Login now!
				</Link>
			</div>
			<div className="flex w-full justify-center items-center gap-x-3 mt-6">
				<GithubSignInButton />
				<GoogleSignInButton />
			</div>
		</div>
	);
};

export default Signup;
