// from MUI

import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Avatar, Box, Button, Divider, Stack, Tooltip } from "@mui/material";
import { useFav } from "../Hooks/useFav";
import { pink } from "@mui/material/colors";
import { useExternalPath } from "../../../Hooks/useExternalPath";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme }) => ({
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
	variants: [
		{
			props: ({ expand }) => !expand,
			style: {
				transform: "rotate(0deg)",
			},
		},
		{
			props: ({ expand }) => !!expand,
			style: {
				transform: "rotate(180deg)",
			},
		},
	],
}));

export function ArtworkCard({ artwork, nav }) {
	const [expanded, setExpanded] = React.useState(false);
	const [favcount, setFavcount] = React.useState(artwork.fav);
	const [favclicked, setFavclicked] = React.useState(false);
	const [sending, setSending] = React.useState(false);

	function handleClick() {
		nav("/artworks/" + artwork.id, {
			state: { artwork: artwork, fav: favcount, favClicked: favclicked },
		});
	}

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

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const favColor = () => {
		if (favclicked) {
			return pink[500];
		}

		return "gray";
	};

	const ShareText = `https://x.com/intent/tweet?text=${artwork.title}%0ACreated by ${artwork.creator}%0Awith GDGoC TMU&hashtags=unitychrome&url=https://gdsc-tmu.github.io/event5-unity/artworks/${artwork.id}`;

	return (
		<Card sx={{ flexGrow: 1, "&:hover": { boxShadow: 7 } }}>
			<CardHeader
				avatar={
					<Avatar>
						<SportsEsportsIcon />
					</Avatar>
				}
				slotProps={{ title: { variant: "h6" } }}
				title={artwork.title}
				subheader={artwork.creator}
				onClick={handleClick}
				sx={{ cursor: "pointer" }}
			/>

			<CardMedia
				component='iframe'
				height='250'
				image={
					artwork.thumbnail.length > 0
						? artwork.thumbnail[0]
						: "https://drive.google.com/file/d/15KmEPtofPUHvhSv8beM72it2FE92xg7n/preview?embedded=true"
				}
				alt=''
			/>
			<CardContent onClick={handleClick} sx={{ cursor: "pointer" }}>
				<Stack direction={"row"} gap={1} mb={1}>
					{artwork.tags.map((tag, index) => (
						<Typography color='primary' variant='body2' key={index}>
							{tag}
						</Typography>
					))}
				</Stack>
				<Typography
					variant='body2'
					sx={{
						color: "text.secondary",
						overflow: "hidden",
						whiteSpace: "nowrap",
						textOverflow: "ellipsis",
					}}
				>
					{artwork.detail}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
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
				<Tooltip title={artwork.link}>
					<Button variant='text' onClick={() => useExternalPath(artwork.link)}>
						遊びに行く
					</Button>
				</Tooltip>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label='show more'
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Box sx={{ mb: 3, px: 1 }}>
						<Typography variant='h6'>ゲームの詳細</Typography>
						<Divider sx={{ my: 1 }} />
						<Typography sx={{ whiteSpace: "pre-wrap" }}>
							{artwork.detail}
						</Typography>
					</Box>
				</CardContent>
			</Collapse>
		</Card>
	);
}
