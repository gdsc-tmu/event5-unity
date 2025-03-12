import { Box, Grid2, Paper, Typography } from "@mui/material";
import React from "react";

const HeadCard = ({ BodyConfig }) => {
	return (
		<Paper
			sx={{ display: "flex", flexDirection: "column", p: 4, gap: 4, my: 2 }}
			elevation={3}
		>
			<Box>
				{BodyConfig.id && (
					<Typography variant='outlined'>ID: {BodyConfig.id}</Typography>
				)}
				<Typography variant='h5' sx={{ my: 2, fontWeight: 600 }}>
					{BodyConfig.title}
				</Typography>
				<Typography sx={{ overflowWrap: "anywhere" }}>
					{BodyConfig.content}
				</Typography>
			</Box>
			{BodyConfig.source_code && (
				<Box>
					<Typography variant='h6' sx={{ fontWeight: 600, mb: 1 }}>
						コード
					</Typography>
					<Paper
						variant='outlined'
						sx={{
							whiteSpace: "pre-wrap",
							overflow: "auto",
							p: 1,
						}}
					>
						{BodyConfig.source_code}
					</Paper>
				</Box>
			)}
			{BodyConfig.images_path.length > 0 && (
				<Box>
					<Typography variant='h6' sx={{ fontWeight: 600, mb: 1 }}>
						画像
					</Typography>
					<Grid2 container spacing={2}>
						{BodyConfig.images_path.map((imagePath, index) => {
							return (
								<Grid2 size={{ xs: 6, sm: 4, md: 3 }} key={index}>
									<iframe src={imagePath} className='w-full h-[250px]'></iframe>
								</Grid2>
							);
						})}
					</Grid2>
				</Box>
			)}
		</Paper>
	);
};

export default HeadCard;
