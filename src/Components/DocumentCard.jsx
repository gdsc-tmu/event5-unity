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
import { useExternalPath } from "../Hooks/useExternalPath";

function dateHelper(d) {
	const date = new Date(d);
	return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${(
		"0" + date.getMinutes()
	).slice(-2)}`;
}

function ConvertNotionEmbedUrl(baseurl) {
	// https://oasis-smartphone-fcf.notion.site/Unity-1b2a6c094a5d80b58031e6eff81bfa77?pvs=4
	// https://oasis-smartphone-fcf.notion.site/ebd/1b2a6c094a5d80b58031e6eff81bfa77

	if (!baseurl) {
		return "";
	}

	return baseurl
		.replace(
			"https://oasis-smartphone-fcf.notion.site/",
			"https://oasis-smartphone-fcf.notion.site/ebd/"
		)
		.replace("?pvs=4", "")
		.replace("Unity-", "");
}

// from MUI
export const DocumentCard = ({ doc, isLoaded, link }) => {
	if (doc.thumbnail === "") {
		doc.thumbnail =
			"https://drive.google.com/file/d/10QvHYUCughbPHZdtcUk1Cqee6v_GOIaC/preview";
	}
	const Notionlink = {
		url: ConvertNotionEmbedUrl(doc.link),
		title: doc.title,
	};

	return (
		<Card
			sx={{ width: "100%", "&:hover": { boxShadow: 7 }, cursor: "pointer" }}
			elevation={3}
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
			<CardContent onClick={() => link(Notionlink)}>
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
							onClick={() => link(Notionlink)}
						>
							{doc.title}
						</Typography>
						<Typography
							variant='body2'
							sx={{ color: "text.secondary", cursor: "pointer" }}
							onClick={() => link(Notionlink)}
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
						サイトで見る
					</Button>
				)}
			</CardActions>
		</Card>
	);
};
