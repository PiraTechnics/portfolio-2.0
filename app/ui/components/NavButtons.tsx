import Link from "next/link";
import { getAllSections } from "../../lib/mdx";

export const NavButtons = async () => {
	const navList = await getAllSections();

	return (
		<div className="flex flex-wrap justify-center gap-4 max-w-xl mb-4 mt-2 mx-2">
			<Link
				href="/"
				className="rounded-full bg-transparent px-4 py-2.5 text-sm font-semibold tracking-wider shadow-sm ring-1 ring-inset ring-slate-100 hover:ring-[#00b1f2] hover:text-[#00b1f2]"
			>
				Home
			</Link>
			{navList.map((entry, i) => (
				<Link
					href={`/${entry.slug}`}
					key={`nav-${i}`}
					className="rounded-full bg-transparent px-4 py-2.5 text-sm font-semibold tracking-wider shadow-sm ring-1 ring-inset ring-slate-100 hover:ring-[#00b1f2] hover:text-[#00b1f2]"
				>
					{entry.frontMatter.title}
				</Link>
			))}
		</div>
	);
};
