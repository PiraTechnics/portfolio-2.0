import Image from "next/image";

export default function ProfilePic(props: any) {
	const imgSrc = props.src;
	const imgAlt = props.alt;

	return (
		<Image
			src={imgSrc}
			alt={imgAlt}
			width={150}
			height={150}
			priority
			className="rounded-full mx-auto my-8 sm:my-6 sm:w-48"
		/>
	);
}
