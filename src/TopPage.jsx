import React from "react";
import {
	Box,
	CircularProgress,
	Container,
	Grid2,
	Stack,
	Typography,
} from "@mui/material";

import { DocumentCard } from "./Components/DocumentCard";
import { circles, colorClasses } from "./Configs/CircleConfigs";
import { HeadCard } from "./Components/HeadCard";
import { useFetch } from "./Hooks/useFetch";
import { useGAS } from "./Configs/GASConfigs";
import { pinnedDocuments } from "./Configs/pinnedDocuments";
import { SearchBar } from "./Components/SearchBar";
import { CategoriesSelector } from "./Components/CategoriesSelector";
import NoResult from "./Components/NoResult";

function TopPage() {
	const url = useGAS("getalldoc");
	const [documents, setDocuments] = React.useState([1, 2, 3]);
	const [loaded, setLoaded] = React.useState(false);
	const [chips, setChips] = React.useState([]);
	const [selectedCategory, setSelectedCategory] = React.useState("all"); // "all", "env", "addfunc", "fundcs", "other"

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

	const filterCategory = (data, category) => {
		return category != "all"
			? data.filter((item) => {
					item.category = item.category ?? "other";
					return item.category === category;
			  })
			: data;
	};

	const categoriedDocuments = filterCategory(
		[...pinnedDocuments, ...documents],
		selectedCategory
	);
	const displayDocuments = filterChips(categoriedDocuments, chips);

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
			<div className='glass w-full pb-10'>
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
					<SearchBar chips={chips} setChips={setChips} sx={{ mb: 3 }} />
					<CategoriesSelector
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
						sx={{ gap: 1 }}
					/>
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
								<NoResult />
							)}
						</Grid2>
					</Stack>
				</Container>
			</div>
		</div>
	);
}

export default TopPage;
