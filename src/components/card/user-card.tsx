type ContactType = "website" | "linkedin" | "medium" | "github" | "dribbble";

type Contact = {
	type: ContactType;
	url: string;
};

type UserCardProps = {
	name: string;
	role: string;
	contacts: Contact[];
};

export function UserCard(props: UserCardProps) {
	return <div>user card</div>;
}
