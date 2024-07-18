import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { inter } from "../fonts";
import CustomLink from "@/app/ui/components/mdx/CustomLink";
import ProfilePic from "../ui/components/mdx/ProfilePic";
import { PreviewCard } from "../ui/components/PreviewCard";

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
		<div className="flex flex-col text-center mx-2">
			<div
				className={`${inter.className} prose prose-md sm:prose-lg prose-headings:text-slate-200
						 prose-p:text-slate-100 prose-headings:font-semibold prose-ul:text-md prose-ul:text-slate-200 sm:prose-a:text-lg prose-a:underline hover:prose-a:text-bg-2 prose-ul:list-none prose-ul:ps-0 prose-a:text-slate-100`}
			>
				<MDXRemote
					source={content}
					components={{
						a: CustomLink,
						img: ProfilePic,
						PreviewCard: PreviewCard,
					}}
				/>
			</div>
		</div>
	);
}
