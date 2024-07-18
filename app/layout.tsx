import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "./fonts";
import { NavButtons } from "./ui/components/NavButtons";
import { ExternalNav } from "./ui/components/externalNav";

export const metadata: Metadata = {
	title: "Devin Younge",
	description: "Devin Younge - Author & TTRPG Content Creator",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${quicksand.className} bg-gradient-to-br from-bg-1 to-bg-2 text-slate-100 flex justify-center`}
			>
				<div className="mx-auto max-w-3xl min-h-screen flex flex-col items-center justify-center gap-10 sm:gap-6 mt-6 mb-12">
					{children}
					<NavButtons />
					<ExternalNav />
				</div>
			</body>
		</html>
	);
}
