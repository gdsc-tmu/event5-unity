import React from "react";
import {
	Box,
	Button,
	CircularProgress,
	Container,
	Grid2,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import { DocumentCard } from "./Components/DocumentCard";

async function fetchAllDocuments(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

export function jumpTo(path) {
	window.location.href = `${path}`;
}

function App() {
	const url =
		"https://script.google.com/macros/s/AKfycbydn4jJHvtokJksVfexIYizS_CV5Nf8UIH8GepDGhGP8HMVZLOuwbpT7YrotrZ7ZvqEHA/exec";
	const [documents, setDocuments] = React.useState([1, 2, 3]);
	const [loaded, setLoaded] = React.useState(false);

	React.useEffect(() => {
		console.log("Welcome to GDGoC TMU. Now loading...");
		const fetchData = async () => {
			const data = await fetchAllDocuments(url);

			setLoaded(true);
			setDocuments(data);
			console.log("Fetching successfully completed.");
		};

		fetchData();
	}, []);

	return (
		<Container sx={{ py: 3 }}>
			<Box sx={{ my: 3 }}>
				<Typography variant='h5' sx={{ mb: 1 }}>
					「Unity勉強会 – クロームくんを動かそう！ –」サポートページ
				</Typography>
				<Typography variant='body2' color='textSecondary'>
					Powered by GDGoC TMU
				</Typography>
			</Box>

			<HeadCard />

			<Stack gap={1} pt={5}>
				{!loaded && (
					<Stack sx={{ alignItems: "center", mb: 3 }}>
						<CircularProgress />
					</Stack>
				)}
				<Grid2 container spacing={2}>
					{documents.map((doc, index) => {
						return (
							<Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
								<DocumentCard doc={doc} isLoaded={loaded} />
							</Grid2>
						);
					})}
				</Grid2>
			</Stack>
		</Container>
	);
}

const HeadCard = React.memo(() => {
	return (
		<Paper sx={{ p: 4 }} elevation={3}>
			<Stack direction={{ xs: "column-reverse", sm: "row" }}>
				<Box sx={{ flexGrow: 5, p: 4, pr: 5 }}>
					<Typography variant='h5' sx={{ mb: 2 }}>
						サポートページにようこそ！
					</Typography>
					<Typography>
						このページでは、Unityの基本的な使い方や作品をブラッシュアップするために役立つTipsを随時追加していきます。
						<br />
						Unityの機能を活用するための情報をまとめていますので、開発の際にぜひ参考にしてください🙌
					</Typography>
					<Box sx={{ display: "flex", gap: 2, mt: 3 }}>
						<Button
							onClick={() =>
								jumpTo("https://gdsc-tmu.connpass.com/event/347169/")
							}
							variant='outlined'
						>
							イベントページへ
						</Button>
						<Button
							onClick={() =>
								jumpTo(
									"https://oasis-smartphone-fcf.notion.site/Unity-1b2a6c094a5d80b58031e6eff81bfa77"
								)
							}
							variant='contained'
						>
							チュートリアルはこちら！
						</Button>
					</Box>
				</Box>
				<img
					src='chromekun.png'
					className='sm:w-[35%] w-full object-cover rounded-lg max-h-[300px]'
				></img>
			</Stack>
		</Paper>
	);
});

export default App;
