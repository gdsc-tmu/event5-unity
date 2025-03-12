import { CircularProgress, Stack } from "@mui/material";
import { lazy, Suspense } from "react";
import TopPage from "./TopPage";
import { useRoutes } from "react-router-dom";

const pages = import.meta.glob("./Pages/**/page.jsx");

let routes = Object.entries(pages).map(([path, importer]) => {
	const Component = lazy(importer);
	return {
		path: path
			.replace("./Pages/", "/")
			.replace(/\[(.*?)\]/g, ":$1")
			.replace("/page.jsx", ""),

		element: (
			<Suspense
				fallback={
					<Stack
						sx={{
							width: "100%",
							height: "100%",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<CircularProgress />
					</Stack>
				}
			>
				<Component />
			</Suspense>
		),
	};
});
routes.push({
	path: "*",
	element: <TopPage />,
});

export default function App() {
	return <EntryPoint />;
}

function EntryPoint() {
	return <>{useRoutes(routes)}</>;
}
