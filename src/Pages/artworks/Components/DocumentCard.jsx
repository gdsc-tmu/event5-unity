import {
	Button,
	Card,
	CardActions,
	CardContent,
	Skeleton,
	Stack,
	Typography,
} from "@mui/material";
import PushPinIcon from "@mui/icons-material/PushPin";
import { useExternalPath } from "../../../Hooks/useExternalPath";

function dateHelper(d) {
	const date = new Date(d);
	return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${(
		"0" + date.getMinutes()
	).slice(-2)}`;
}

export const DocumentCard = ({ doc, isLoaded }) => {
	if (doc.thumbnail === "") {
		doc.thumbnail =
			"https://drive.google.com/file/d/10QvHYUCughbPHZdtcUk1Cqee6v_GOIaC/preview";
	}
	return (
		<Card
			sx={{ width: "100%", "&:hover": { boxShadow: 7 }, cursor: "pointer" }}
			elevation={3}
			onClick={() => useExternalPath(doc.link)}
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
						<Stack direction={"row"} alignItems={"center"} gap={1}>
							{doc.pinned && <PushPinIcon color='disabled' fontSize='small' />}
							<Typography
								variant='overline'
								color='textSecondary'
								sx={{ verticalAlign: "top" }}
							>
								{dateHelper(doc.time_stamp)}
							</Typography>
						</Stack>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							sx={{ cursor: "pointer" }}
							onClick={() => useExternalPath(doc.link)}
						>
							{doc.title}
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: "text.secondary", cursor: "pointer" }}
							onClick={() => useExternalPath(doc.link)}
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
			<CardActions onClick={() => useExternalPath(doc.link)}>
				{isLoaded && (
					<Button variant='text' onClick={() => useExternalPath(doc.link)}>
						もっと見る
					</Button>
				)}
			</CardActions>
		</Card>
	);
};
