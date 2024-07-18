import Image from "next/image";
import Link from "next/link";

interface PreviewCardProps {
	img: string;
	alt: string;
	title: string;
	url: string;
}

export const PreviewCard = ({ img, title, url, alt }: PreviewCardProps) => {
	return (
		<Link href={url} target="_blank" rel="noopener noreferrer">
			<Image
				src={img}
				alt={alt}
				title={title}
				width={400}
				height={200}
				className="rounded-xl transition ease-in-out hover:scale-105  duration-200 p-2 mx-auto"
			/>
		</Link>
	);
};
