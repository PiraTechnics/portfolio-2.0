import Image from "next/image";
import { inter } from "../fonts";

const desc =
  "Devin Younge (He/Him) is a writer specializing in Technology, Tabletop RPGs, and Fantasy Fiction. He has also worked in journalism, entertainment, and software development.";

//const desc = "Website under construction, check back soon!";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 mx-2">
      <Image
        src="/profile.jpg"
        alt="Vercel Logo"
        //className="dark:invert"
        className="rounded-full"
        width={150}
        height={150}
        priority
      />
      <h1
        className={`${inter.className} text-center text-5xl font-semibold bg-gradient-to-br from-slate-300 to-white text-transparent bg-clip-text inline-block p-1`}
      >
        Devin Younge, Writer
      </h1>

      <div className="text-lg text-center">{desc}</div>
    </div>
  );
}
