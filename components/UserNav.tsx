import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserNav = () => {
	const { data: session } = useSession();
	console.log(session?.user?.name);
	return !session?.user?.image ? (
		<Link href={"/login"}>
			<Button>Log in</Button>
		</Link>
	) : (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="relative h-10 w-10 rounded-sm">
					<Avatar className="h-10 w-10 rounded-sm">
						<AvatarImage src={session?.user?.image} alt="profile picutre" />
						<AvatarFallback className="rounded-sm">
							{session.user.name?.charAt(0)}
						</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel>
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">
							{session.user?.name}
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{session.user?.email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => signOut()}>Sign out</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserNav;
