import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Skeleton,
	Typography,
} from "@mui/material";
import { jumpTo } from "../App";

export const DocumentCard = ({ doc, isLoaded }) => {
	console.log(doc.thumbnail);
	return (
		<Card sx={{ width: "100%" }} elevation={3}>
			{isLoaded ? (
				<iframe src={doc.thumbnail} className='w-full h-[250px]'></iframe>
			) : (
				<Skeleton variant='rectangular' sx={{ height: 200 }} />
			)}
			<CardContent>
				{isLoaded ? (
					<>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{ cursor: "pointer" }}
							onClick={() => jumpTo(doc.link)}
						>
							{doc.title}
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: "text.secondary", cursor: "pointer" }}
							onClick={() => jumpTo(doc.link)}
						>
							{doc.summary}
						</Typography>
					</>
				) : (
					<>
						<Skeleton variant='text' sx={{ fontSize: "2rem" }} />
						<Skeleton variant='rounded' width={210} height={60} />
					</>
				)}
			</CardContent>
			<CardActions>
				{isLoaded && (
					<Button variant='text' onClick={() => jumpTo(doc.link)}>
						もっと見る
					</Button>
				)}
			</CardActions>
		</Card>
	);
};
