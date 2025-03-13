import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { jumpTo } from "../TopPage";

const PageFooter = () => {
	return (
		<div className=''>
			<Container>
				<Stack direction='row' sx={{ justifyContent: "space-between", py: 4 }}>
					<Box>
						<Typography variant='body1'>
							「Unity勉強会 – クロームくんを動かそう！ –」サポートページ
						</Typography>
						<Typography color='textSecondary' variant='body2'>
							Powered by GDG on Campus Tokyo Metropolitan University
						</Typography>
					</Box>
					<Box>
						<Chip
							icon={<GitHubIcon />}
							label='GitHub'
							variant='outlined'
							onClick={() => jumpTo("https://github.com/gdsc-tmu/event5-unity")}
						/>
					</Box>
				</Stack>
			</Container>
		</div>
	);
};

export default PageFooter;
