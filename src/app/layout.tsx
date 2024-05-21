import NavigationBar from "@/components/navigation-bar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NYP Technopreneurship Club",
	description: "Hello World!",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme={"cupcake"}>
			<body className={inter.className}>
				<div className={"h-dvh flex flex-col"}>
					<NavigationBar className={"flex-none"} />
					<div className={"flex-1 overflow-y-auto"}>{children}</div>
				</div>
			</body>
		</html>
	);
}