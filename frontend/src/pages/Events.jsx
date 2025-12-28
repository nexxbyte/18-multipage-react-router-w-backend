import { Link } from "react-router";

const EVENTS = [
	{
		id: "e1",
		title: "Event 1",
	},
	{
		id: "e2",
		title: "Event 2",
	},
	{
		id: "e3",
		title: "Event 3",
	},
	{
		id: "e4",
		title: "Event 4",
	},
	{
		id: "e5",
		title: "Event 5",
	},
];

export default function EventsPage() {
	return (
		<>
			<h1>Event Page!</h1>
			<ul>
				{EVENTS.map((eve) => (
					<li key={eve.id}>
						<Link to={eve.id}>{eve.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
