import {
	Box,
	CircularProgress,
	Container,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import HeadCard from "./Components/HeadCard";
import { useFetch } from "../../../Hooks/useFetch";
import { useGAS } from "../../../Configs/GASConfigs";

const page = () => {
	const params = useParams();
	const location = useLocation();
	const que = location.state;

	const [answers, setAnswers] = React.useState(null);
	const [Aloaded, setALoaded] = React.useState(false);

	const [question, setQuestion] = React.useState(que);
	const [Qloaded, setQloaded] = React.useState(que ? true : false);

	const Ansurl = useGAS("getallanswers", params.id);
	const Qurl = useGAS("getquestionbyid", params.id);

	React.useEffect(() => {
		console.log("Welcome to GDGoC TMU. Now loading...");

		const fetchData = async () => {
			const data = await useFetch(Ansurl);

			setALoaded(true);
			setAnswers(data);
			console.log("Fetching successfully completed.");
		};

		fetchData();
	}, []);

	// stateにない場合質問情報をfetchする
	React.useEffect(() => {
		const fetchData = async () => {
			const data = await useFetch(Qurl);

			setQloaded(true);
			setQuestion(data);
		};
		if (!que) {
			fetchData();
		}
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
				{Qloaded ? (
					<HeadCard BodyConfig={question} />
				) : (
					<Box
						sx={{ display: "flex", width: "100%", justifyContent: "center" }}
					>
						<CircularProgress />
					</Box>
				)}
				{Aloaded ? (
					answers.length > 0 ? (
						answers.map((answer, index) => {
							const bodyConfig = {
								title: "回答" + (index + 1),
								content: answer.content,
								code: answer.code,
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
