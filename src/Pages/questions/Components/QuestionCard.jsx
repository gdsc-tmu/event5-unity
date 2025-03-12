import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

const QuestionCard = ({ card, onClick }) => {
	return (
		<Card elevation={3}>
			<CardActionArea
				onClick={onClick}
				sx={{
					height: "100%",
					"&[data-active]": {
						backgroundColor: "action.selected",
						"&:hover": {
							backgroundColor: "action.selectedHover",
						},
					},
				}}
			>
				<CardContent sx={{ p: 3 }}>
					{card.isNew && (
						<Typography variant='body2' color='primary' sx={{ mb: 1 }}>
							NEW
						</Typography>
					)}
					<Typography variant='h6' component='div' sx={{ mb: 1 }}>
						{card.title}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						sx={{
							height: 20,
							textOverflow: "ellipsis",
							overflow: "hidden",
							whiteSpace: "nowrap",
						}}
					>
						{card.content}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default QuestionCard;
