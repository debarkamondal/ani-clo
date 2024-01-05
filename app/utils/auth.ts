import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import prisma from "./db";
import { Adapter } from "next-auth/adapters";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		EmailProvider({
			server: {
				host: process.env.EMAIL_SERVER_HOST as string,
				port: process.env.EMAIL_SERVER_PORT as string,
				auth: {
					user: process.env.EMAIL_SERVER_USER as string,
					pass: process.env.EMAIL_SERVER_PASSWORD as string,
				},
			},
			from: process.env.EMAIL_FROM as string,
		}),
	],
	adapter: PrismaAdapter(prisma) as Adapter,
} satisfies NextAuthOptions;
