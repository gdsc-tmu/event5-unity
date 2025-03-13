import { Stack, Typography } from "@mui/material";
import React from "react";

const NoResult = () => {
	return (
		<Stack
			sx={{
				width: "100%",
				height: 300,
				alignItems: "center",
				pt: 10,
			}}
		>
			<Typography variant='h6'>見つかりませんでした</Typography>
		</Stack>
	);
};

export default NoResult;
