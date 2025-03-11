import React from "react";
import {
	Box,
	Button,
	Chip,
	CircularProgress,
	Container,
	Grid2,
	IconButton,
	InputBase,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DocumentCard } from "./Components/DocumentCard";

async function fetchAllDocuments(url) {
	const response = await fetch(url);

	const data = await response.json();
	// const data = [
	// 	{
	// 		title: "【テスト２】テスト",
	// 		summary: "サマリーテスト２",
	// 		link: "https://yzuemx.com",
	// 		thumbnail:
	// 			"https://drive.google.com/file/d/1mzQIw_fqPiluSPvsgKY64lzNn8vs9ED3/preview",
	// 	},
	// 	{
	// 		title: "【テスト】テストドキュメント",
	// 		summary: "テストのサマリー",
	// 		link: "https://x.com/GdscTmu",
	// 		thumbnail:
	// 			"https://drive.google.com/file/d/1DaNt_a52oFMsFbp8mB8pvYyM_J1DyOBv/preview",
	// 	},
	// 	{
	// 		title: "音を追加してみよう",
	// 		summary: "",
	// 		link: "https://oasis-smartphone-fcf.notion.site/1b3a6c094a5d80828d96f8bec377d05f?pvs=4",
	// 		thumbnail: "",
	// 	},
	// 	{
	// 		title: "ああ",
	// 		summary: "いい",
	// 		link: "https://yzuemx.com",
	// 		thumbnail: "",
	// 	},
	// ];
	return data;
}

export function jumpTo(path) {
	window.location.href = `${path}`;
}

function App() {
	const url =
		"https://script.google.com/macros/s/AKfycbxVj1v7c3WguiAIqXadXQ0qKGmNJ_dPRMqTjsYim-GVrr5IRapF-9WQjfVoY8kX0jBdkQ/exec";
	const [documents, setDocuments] = React.useState([1, 2, 3]);
	const [loaded, setLoaded] = React.useState(false);
	const [chips, setChips] = React.useState([]);

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

	const circles = [
		{ color: "red", top: "5", left: "10" },
		{ color: "yellow", top: "30", left: "80" },
		{ color: "green", top: "85", left: "10" },
		{ color: "blue", top: "80", left: "70" },
		{ color: "red", top: "65", left: "90" },
		{ color: "yellow", top: "55", left: "5" },
		{ color: "green", top: "7", left: "90" },
		{ color: "blue", top: "35", left: "30" },
	];

	const colorClasses = {
		red: "bg-red-600",
		green: "bg-green-500",
		blue: "bg-blue-500",
		yellow: "bg-yellow-500",
	};

	const filterChips = (data, chips) => {
		return chips.length > 0
			? data.filter((item) =>
					chips.some(
						(chip) => item.title.includes(chip) || item.summary.includes(chip)
					)
			  )
			: data;
	};

	const displayDocuments = filterChips(documents, chips);

	return (
		<div className='w-full overflow-hidden relative'>
			{circles.map((circle, index) => {
				return (
					<div
						key={index}
						className={"circle " + colorClasses[circle.color]}
						style={{ top: `${circle.top}%`, left: `${circle.left}%` }}
					></div>
				);
			})}
			<div className='glass w-full'>
				<Container sx={{ py: 3 }}>
					<Box sx={{ my: 3 }}>
						<Typography variant='h5' sx={{ mb: 1, fontWeight: 600 }}>
							「Unity勉強会 – クロームくんを動かそう！ –」サポートページ
						</Typography>
						<Typography variant='body2' color='textSecondary'>
							Powered by GDGoC TMU
						</Typography>
					</Box>

					<HeadCard />
					<ChipInput chips={chips} setChips={setChips} />

					<Stack gap={1} pt={3}>
						{!loaded && (
							<Stack sx={{ alignItems: "center", mb: 3 }}>
								<CircularProgress />
							</Stack>
						)}
						<Grid2 container spacing={2}>
							{displayDocuments.length > 0 ? (
								displayDocuments.map((doc, index) => {
									return (
										<Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
											<DocumentCard doc={doc} isLoaded={loaded} />
										</Grid2>
									);
								})
							) : (
								<Stack
									sx={{
										width: "100%",
										height: 300,
										alignItems: "center",
										pt: 10,
									}}
								>
									<Typography variant='h6'>見つかりませんでした</Typography>
								</Stack>
							)}
						</Grid2>
					</Stack>
				</Container>
			</div>
		</div>
	);
}

const HeadCard = React.memo(() => {
	return (
		<Paper sx={{ p: 4 }} elevation={3}>
			<Stack direction={{ xs: "column-reverse", sm: "row" }}>
				<Box sx={{ flexGrow: 5, p: 4, pr: 5 }}>
					<Typography variant='h5' sx={{ mb: 2, fontWeight: 600 }}>
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

const ChipInput = ({ chips, setChips }) => {
	const [inputValue, setInputValue] = React.useState("");

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && inputValue.trim() !== "") {
			setChips([...chips, inputValue.trim()]);
			setInputValue("");
			event.preventDefault(); // Enterのデフォルト動作を防ぐ
		}
	};

	const handleDelete = (chipToDelete) => {
		setChips(chips.filter((chip) => chip !== chipToDelete));
	};

	return (
		<Paper sx={{ p: 2, mt: 3 }} elevation={3}>
			<Stack spacing={1} direction='row' flexWrap='wrap'>
				{chips.map((chip, index) => (
					<Chip key={index} label={chip} onDelete={() => handleDelete(chip)} />
				))}
			</Stack>
			<InputBase
				sx={{ mt: 1 }}
				fullWidth
				placeholder='Tipsを検索'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</Paper>
	);
};

export default App;
