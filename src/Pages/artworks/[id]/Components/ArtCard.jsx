import {
	Box,
	Divider,
	IconButton,
	ImageList,
	ImageListItem,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useFav } from "../../Hooks/useFav";
import { pink } from "@mui/material/colors";
import { useDate } from "../../../../Hooks/useDate";
import { Link } from "react-router-dom";

const ArtCard = ({ artwork, favs, isfav }) => {
	const [favcount, setFavcount] = React.useState(favs);
	const [favclicked, setFavclicked] = React.useState(isfav);
	const [sending, setSending] = React.useState(false);

	const ShareText = `https://x.com/intent/tweet?text=${artwork.title}%0ACreated by ${artwork.creator}%0Awith GDGoC TMU&hashtags=unitychrome&url=https://gdsc-tmu.github.io/event5-unity/artworks/${artwork.id}`;
	async function handleFav() {
		if (sending) return;
		setSending(true);

		if (favclicked) {
			setFavcount((prev) => prev - 1);
			setFavclicked(false);
			await useFav(artwork.id, "decrement");
		} else {
			setFavcount((prev) => prev + 1);
			setFavclicked(true);
			await useFav(artwork.id, "increment");
		}

		setSending(false);
	}

	const favColor = () => {
		if (favclicked) {
			return pink[500];
		}

		return "gray";
	};
	return (
		<Paper sx={{ width: "100%", p: 5 }}>
			{artwork.thumbnail.length > 0 && (
				<ImageList sx={{ width: "100%", height: "500px" }} rowHeight={200}>
					<ImageListItem cols={2} rows={2}>
						<iframe
							style={{ pointerEvents: "none", cursor: "default" }}
							width={"100%"}
							height={"100%"}
							src={artwork.thumbnail[0]}
						></iframe>
					</ImageListItem>
					{artwork.thumbnail.slice(1).map((thum, index) => (
						<ImageListItem cols={1} rows={1} key={index}>
							<iframe
								style={{ pointerEvents: "none", cursor: "default" }}
								width={"100%"}
								height={"100%"}
								src={thum}
							></iframe>
						</ImageListItem>
					))}
				</ImageList>
			)}
			<Stack direction={"row"} gap={1} mt={3} mb={1} ml={1} mr={2}>
				<Typography color='textSecondary'>
					{useDate(artwork.time_stamp)}
				</Typography>
				{artwork.tags.map((tag, index) => (
					<Typography color='primary' variant='body1' key={index}>
						{tag}
					</Typography>
				))}
			</Stack>
			<Stack direction={"row"} alignItems={"center"} mt={1}>
				<IconButton aria-label='add to favorites' onClick={handleFav}>
					<FavoriteIcon sx={{ color: favColor() }} />
				</IconButton>
				<Typography sx={{ color: favColor(), mr: 1 }}>{favcount}</Typography>
				<IconButton
					aria-label='share'
					sx={{ mr: 1 }}
					component={Link}
					to={ShareText}
				>
					<ShareIcon />
				</IconButton>
			</Stack>

			<Box sx={{ mb: 3, pt: 3 }}>
				<Typography variant='h6'>ゲームの詳細</Typography>
				<Divider sx={{ my: 2 }} />
				<Typography sx={{ whiteSpace: "pre-wrap" }}>
					{artwork.detail}
				</Typography>
			</Box>
		</Paper>
	);
};

export default ArtCard;
