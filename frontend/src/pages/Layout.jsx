import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

export default function Layout() {
	return (
		<>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
		</>
	);
}
