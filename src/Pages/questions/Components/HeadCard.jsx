import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { jumpTo } from "../../../TopPage";

export const HeadCard = React.memo(() => {
	const nav = useNavigate();
	return (
		<Paper sx={{ p: 4 }} elevation={3}>
			<Stack direction={{ xs: "column-reverse", sm: "row" }}>
				<Box sx={{ flexGrow: 5, p: 4, pr: 5 }}>
					<Typography variant='h5' sx={{ mb: 2, fontWeight: 600 }}>
						質問ページ（ベータ版）
					</Typography>
					<Typography>
						このページでは、Unityに関する疑問を共有することができます。もしわからないことがあったら、お気軽にご相談を！
					</Typography>
					<Box sx={{ display: "flex", gap: 2, mt: 3 }}>
						<Button onClick={() => nav("/")} variant='outlined'>
							トップへ戻る
						</Button>
						<Button
							onClick={() =>
								jumpTo(
									"https://docs.google.com/forms/d/e/1FAIpQLScCA1zpQgoKF-QUxjVdB7kzAN1MXraBdlJNy_VDWDYjvik1kA/viewform"
								)
							}
							variant='contained'
						>
							質問フォームはこちら！
						</Button>
					</Box>
				</Box>
			</Stack>
		</Paper>
	);
});
