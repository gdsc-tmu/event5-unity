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

export function ArtworkCard({ artwork }) {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader title={artwork.title} subheader={artwork.creator} />
			<CardMedia component='img' height='194' image='' alt='' />
			<CardContent>
				<Typography
					variant='body2'
					sx={{ color: "text.secondary" }}
				></Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label='add to favorites'>
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label='share'>
					<ShareIcon />
				</IconButton>
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
				<CardContent></CardContent>
			</Collapse>
		</Card>
	);
}
