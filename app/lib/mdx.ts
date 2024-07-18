import fs from "fs";
import path from "path";
import matter from "gray-matter";

const sectionsDirectory = path.join(process.cwd(), "sections");

export function getSectionSlugs() {
	return fs.readdirSync(sectionsDirectory);
}

export function getSectionBySlug(slug: string) {
	const fullPath = path.join(sectionsDirectory, `${slug}`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return { data, content };
}

export function getAllSections() {
	const slugs = getSectionSlugs();

	const sections = slugs.map((slug) => {
		const { data } = getSectionBySlug(slug);
		return {
			slug: slug.replace(/\.mdx$/, ""),
			frontMatter: data,
		};
	});

	//if given a priority, sort by that

	return sections;
}

export function sortSections() {
	//TODO: figure out how to sort by a given paramter -- such as provided order/priority
}
