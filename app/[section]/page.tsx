import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { inter } from "../fonts";

const sectionsDir = path.join(process.cwd(), "sections");

export default async function Page({
	params,
}: {
	params: { section: string };
}) {
	const id = params.section;
	console.log(`Section id: ${id}`);
	console.log(`Sections Directory: ${sectionsDir}`);
	//get path and page data, using 'sections' folder
	const fullPath = path.join(sectionsDir, `${id}.mdx`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	//console.log(content);

	return (
		<div className="flex flex-col text-center">
			<div>
				<h2
					className={`${inter.className} text-4xl font-semibold bg-gradient-to-br from-slate-300 to-white text-transparent bg-clip-text inline-block p-1`}
				>
					{data.title}
				</h2>
				<div className="prose prose-headings:text-slate-300 prose-p:text-slate-100">
					<MDXRemote source={content} />
				</div>
			</div>
		</div>
	);
}
