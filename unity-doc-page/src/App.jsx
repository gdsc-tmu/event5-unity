import React from "react";
import "./App.css";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
	Container,
	Grid2,
	Stack,
	Typography,
} from "@mui/material";

async function fetchAllDocuments(url) {
	const response = await fetch(url);
	const data = await response.json();

	return data;
}

function App() {
	const url =
		"https://script.google.com/macros/s/AKfycbyQPUXmckxPOROCSwAZzLHq8xcD8ZHfZQq2UUF6IL3mej1ihBPq3v4Q_Pby6XSPy_5nyQ/exec";
	const [documents, setDocuments] = React.useState();

	React.useEffect(() => {
		const fetchData = async () => {
			const data = await fetchAllDocuments(url);

			setDocuments(data);
		};

		fetchData();
	}, []);

	return (
		<Container sx={{ py: 3 }}>
			<Typography variant='h4'>Unity勉強会サポートページ</Typography>
			<Stack gap={1} pt={5}>
				{documents ? (
					<Grid2 container spacing={2}>
						{documents.map((doc, index) => {
							return (
								<Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={index}>
									<Card sx={{ width: "100%" }} elevation={3}>
										<CardMedia
											sx={{ height: 140 }}
											image='/static/images/cards/contemplative-reptile.jpg'
											title='thumbnail'
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='div'>
												{doc.title}
											</Typography>
											<Typography
												variant='body2'
												sx={{ color: "text.secondary" }}
											>
												{doc.summary}
											</Typography>
										</CardContent>
										<CardActions>
											<Button
												variant='text'
												onClick={() => {
													console.log(doc.link);
													window.location.href = `${doc.link}`;
												}}
											>
												もっと見る
											</Button>
										</CardActions>
									</Card>
								</Grid2>
							);
						})}
					</Grid2>
				) : (
					<Stack alignItems={"center"}>
						<CircularProgress />
					</Stack>
				)}
			</Stack>
		</Container>
	);
}

export default App;
