import React from "react";
import { circles, colorClasses } from "../../Configs/CircleConfigs";
import {
	Box,
	CircularProgress,
	Container,
	Grid2,
	Stack,
	Typography,
} from "@mui/material";
import { DocumentCard } from "./Components/DocumentCard";

const page = () => {
	const url = useGAS("getalldoc");
	const [documents, setDocuments] = React.useState([1, 2, 3]);
	const [loaded, setLoaded] = React.useState(false);

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

					<Stack gap={1} pt={3}>
						{!loaded && (
							<Stack sx={{ alignItems: "center", mb: 3 }}>
								<CircularProgress />
							</Stack>
						)}
						<Grid2 container spacing={2}>
							{documents.length > 0 ? (
								documents.map((doc, index) => {
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
};

export default page;
