import {
	Box,
	CircularProgress,
	Container,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import HeadCard from "./Components/HeadCard";
import { useFetch } from "../../../Hooks/useFetch";

const page = () => {
	const location = useLocation();
	const question = location.state;

	const [answers, setAnswers] = React.useState(null);
	const [loaded, setLoaded] = React.useState(false);

	const url =
		"https://script.google.com/macros/s/AKfycbyN1iBjFQykYrX0Z-Q_dY4kn-l2_fSnG--PMYd-6p74gzw8aq-nhXe_s1zgVFByFJZSUw/exec?id=" +
		question.id;

	React.useEffect(() => {
		console.log("Welcome to GDGoC TMU. Now loading...");

		const fetchData = async () => {
			const data = await useFetch(url);

			setLoaded(true);
			setAnswers(data);
			console.log("Fetching successfully completed.");
		};

		fetchData();
	}, []);
	return (
		<Container>
			<Box sx={{ my: 3 }}>
				<Typography variant='h6' sx={{ mb: 1, fontWeight: 600 }}>
					質問
				</Typography>
				<Typography variant='body2' color='textSecondary'>
					Powered by GDGoC TMU
				</Typography>
			</Box>
			<Stack>
				<HeadCard BodyConfig={question} />
				{loaded ? (
					answers.length > 0 ? (
						answers.map((answer, index) => {
							const bodyConfig = {
								title: "回答" + (index + 1),
								content: answer.content,
								source_code: answer.source_code,
								images_path: answer.images_path,
							};
							return <HeadCard BodyConfig={bodyConfig} key={index} />;
						})
					) : (
						<Box
							sx={{ display: "flex", width: "100%", justifyContent: "center" }}
						>
							<Typography>まだ回答はありません</Typography>
						</Box>
					)
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
