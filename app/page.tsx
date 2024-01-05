import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./utils/auth";

export default async function Home() {
	const session = await getServerSession(authOptions);
	console.log(session);
	return (
		<div>
			<Button>This is a Button</Button>
		</div>
	);
}
