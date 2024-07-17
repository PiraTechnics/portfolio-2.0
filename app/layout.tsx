import type { Metadata } from "next";
import "./globals.css";
import { quicksand } from "./fonts";

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
				<main className="min-h-screen max-w-3xl flex flex-col items-center justify-center gap-4 mb-8">
					{children}
				</main>
			</body>
		</html>
	);
}
