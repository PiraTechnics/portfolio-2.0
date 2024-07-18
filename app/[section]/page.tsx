import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { inter } from "../fonts";
import CustomLink from "@/app/ui/components/mdx/CustomLink";

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
				{/* <h2
					className={`${inter.className} text-4xl font-semibold bg-gradient-to-br from-slate-300 to-white text-transparent bg-clip-text inline-block p-1`}
				>
					{data.title}
				</h2> */}
				<div
					className={`${inter.className} prose prose-headings:text-slate-200
						 prose-p:text-slate-100 prose-headings:font-semibold  prose-ul:text-md prose-ul:text-slate-200 prose-a:text-lg prose-a:underline hover:prose-a:text-bg-2 prose-ul:list-none prose-a:text-slate-100`}
				>
					<MDXRemote source={content} components={{ a: CustomLink }} />
				</div>
			</div>
		</div>
	);
}
