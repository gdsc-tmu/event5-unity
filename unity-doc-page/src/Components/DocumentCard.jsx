import {
	Button,
	Card,
	CardActions,
	CardContent,
	Skeleton,
	Typography,
} from "@mui/material";
import { jumpTo } from "../TopPage";

export const DocumentCard = ({ doc, isLoaded }) => {
	if (doc.thumbnail === "") {
		doc.thumbnail =
			"https://drive.google.com/file/d/10QvHYUCughbPHZdtcUk1Cqee6v_GOIaC/preview";
	}
	return (
		<Card
			sx={{ width: "100%", "&:hover": { boxShadow: 7 }, cursor: "pointer" }}
			elevation={3}
			onClick={() => jumpTo(doc.link)}
		>
			{isLoaded ? (
				<iframe
					src={doc.thumbnail}
					className='w-full h-[250px]'
					style={{ pointerEvents: "none" }}
				></iframe>
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
			<CardActions onClick={() => jumpTo(doc.link)}>
				{isLoaded && (
					<Button variant='text' onClick={() => jumpTo(doc.link)}>
						もっと見る
					</Button>
				)}
			</CardActions>
		</Card>
	);
};
