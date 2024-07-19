import Image from "next/image";

export default function ProfilePic(props: any) {
	const imgSrc = props.src;
	const imgAlt = props.alt;

	return (
		<Image
			src={imgSrc}
			alt={imgAlt}
			width={400}
			height={150}
			priority
			className="mx-auto my-8 sm:my-6"
		/>
	);
}
