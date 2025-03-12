import React from "react";
import {
	Box,
	Chip,
	CircularProgress,
	Container,
	Grid2,
	InputBase,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import { DocumentCard } from "./Components/DocumentCard";
import { circles, colorClasses } from "./Configs/CircleConfigs";
import { HeadCard } from "./Components/HeadCard";
import { useFetch } from "./Hooks/useFetch";
import { useGAS } from "./Configs/GASConfigs";

export function jumpTo(path) {
	window.location.href = `${path}`;
}

function TopPage() {
	const url = useGAS("getalldoc");
	const [documents, setDocuments] = React.useState([1, 2, 3]);
	const [loaded, setLoaded] = React.useState(false);
	const [chips, setChips] = React.useState([]);

	React.useEffect(() => {
		console.log("Welcome to GDGoC TMU. Now loading...");

		const fetchData = async () => {
			const data = await useFetch(url);

			setLoaded(true);
			setDocuments(data);
			console.log("Fetching successfully completed.");
		};

		fetchData();
	}, []);

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

export default TopPage;
