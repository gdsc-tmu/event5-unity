import {
	Box,
	CircularProgress,
	Container,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import { HeadCard } from "./Components/HeadCard";
import QuestionCard from "./Components/QuestionCard";
import { useFetch } from "../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useGAS } from "../../Configs/GASConfigs";

const page = () => {
	const nav = useNavigate();

	const [questions, setQuestions] = React.useState(null);
	const [loaded, setLoaded] = React.useState(false);

	const url = useGAS("getallquestions");

	React.useEffect(() => {
		console.log("Welcome to GDGoC TMU. Now loading...");

		const fetchData = async () => {
			const data = await useFetch(url);

			setLoaded(true);
			setQuestions(data);
			console.log("Fetching successfully completed.");
		};

		fetchData();
	}, []);

	return (
		<Container sx={{ py: 3 }}>
			<Box sx={{ my: 3 }}>
				<Typography variant='h5' sx={{ mb: 1, fontWeight: 600 }}>
					「Unity勉強会 – クロームくんを動かそう！ –」 質問ページ（ベータ版）
				</Typography>
				<Typography variant='body2' color='textSecondary'>
					Powered by GDGoC TMU
				</Typography>
			</Box>
			<HeadCard />
			<Typography sx={{ mt: 4 }} variant='h6'>
				質問一覧
			</Typography>
			<Stack sx={{ pt: 4 }} gap={2}>
				{loaded ? (
					questions.map((question, index) => {
						return (
							<QuestionCard
								card={question}
								key={index}
								onClick={() =>
									nav("/questions/" + question.id, {
										state: question,
									})
								}
							/>
						);
					})
				) : (
					<Box
						sx={{ display: "flex", width: "100%", justifyContent: "center" }}
					>
						<CircularProgress />
					</Box>
				)}
			</Stack>
		</Container>
	);
};

export default page;
