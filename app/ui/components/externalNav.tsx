import { ExternalNavLinks } from "@/data";

export const ExternalNav = () => {
	return (
		<div className="flex gap-6">
			{ExternalNavLinks.map((entry, i) => (
				<div key={`external-${entry.name}`}>
					<a
						href={entry.href}
						aria-label={entry.name}
						target="_blank"
						rel="noopener noreferrer"
					>
						<entry.icon
							size={32}
							classes="fill-slate-300 opacity-50 transition ease-in-out duration-300 hover:scale-125"
						/>
					</a>
				</div>
			))}
		</div>
	);
};
