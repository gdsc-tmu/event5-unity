import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { jumpTo } from "../TopPage";

export const HeadCard = React.memo(() => {
	const nav = useNavigate();
	return (
		<Paper sx={{ p: 4 }} elevation={3}>
			<Stack direction={{ xs: "column-reverse", sm: "row" }}>
				<Box sx={{ flexGrow: 5, p: 4, pr: 5 }}>
					<Typography variant='h5' sx={{ mb: 2, fontWeight: 600 }}>
						サポートページにようこそ！
					</Typography>
					<Typography>
						このページでは、Unityの基本的な使い方や作品をブラッシュアップするために役立つTipsを随時追加していきます。
						<br />
						Unityの機能を活用するための情報をまとめていますので、開発の際にぜひ参考にしてください🙌
					</Typography>
					<Box sx={{ mt: 3 }}>
						<Button
							onClick={() =>
								jumpTo("https://gdsc-tmu.connpass.com/event/347169/")
							}
							variant='outlined'
						>
							イベントページへ
						</Button>
						<Button
							onClick={() =>
								jumpTo(
									"https://oasis-smartphone-fcf.notion.site/Unity-1b2a6c094a5d80b58031e6eff81bfa77"
								)
							}
							sx={{ ml: 1 }}
							variant='contained'
						>
							チュートリアルはこちら！
						</Button>
						<br />
						<Button
							variant='outlined'
							sx={{ mt: 1 }}
							onClick={() => nav("/event5-unity/questions")}
						>
							質問もできます！（ベータ版）
						</Button>
					</Box>
				</Box>
				<img
					src='chromekun.png'
					className='sm:w-[35%] w-full object-cover rounded-lg max-h-[300px]'
				></img>
			</Stack>
		</Paper>
	);
});
