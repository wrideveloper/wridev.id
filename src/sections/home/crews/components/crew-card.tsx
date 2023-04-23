import Image from "next/image";
import { ReactNode } from "react";
import DribbbleIcon from "~/icons/ic_dribbble.svg";
import GithubIcon from "~/icons/ic_github.svg";
import LinkedInIcon from "~/icons/ic_linkedin.svg";
import MediumIcon from "~/icons/ic_medium.svg";
import WebsiteIcon from "~/icons/ic_globe.svg";
import Link from "next/link";

type ContactType = "website" | "linkedin" | "medium" | "github" | "dribbble";

export type Contact = {
	type: ContactType;
	url: string;
};

type UserCardProps = {
	name: string;
	image: string;
	role: string;
	contacts: Contact[];
};

const CONTACT_ICON_MAP: Record<ContactType, ReactNode> = {
	dribbble: <DribbbleIcon />,
	github: <GithubIcon />,
	linkedin: <LinkedInIcon />,
	medium: <MediumIcon />,
	website: <WebsiteIcon />,
};

export function CrewCard(props: UserCardProps) {
	return (
		<div className="p-10 bg-gray-50 rounded-xl drop-shadow-lg">
			<Image className="rounded-lg mb-2 mx-auto" src={props.image} alt={props.name} width={100} height={100} />
			<span className="font-medium text-lg text-gray-600 block text-center">{props.name}</span>
			<p className="text-lg text-gray-600 mb-6 text-center">{props.role}</p>
			<div className="flex gap-2 justify-center items-center mx-auto">
				{props.contacts.map((contact) => (
					<Link key={contact.type} className="text-gray-600" href={contact.url}>
						{CONTACT_ICON_MAP[contact.type]}
					</Link>
				))}
			</div>
		</div>
	);
}
