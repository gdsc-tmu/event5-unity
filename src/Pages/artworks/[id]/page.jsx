import {
	Box,
	Button,
	CircularProgress,
	Container,
	Skeleton,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../Hooks/useFetch";
import { useGAS } from "../../../Configs/GASConfigs";
import ArtCard from "./Components/ArtCard";
import { circles, colorClasses } from "../../../Configs/CircleConfigs";
import { useExternalPath } from "../../../Hooks/useExternalPath";

const page = () => {
	const params = useParams();
	const location = useLocation();
	const art = location.state.artwork;
	const nav = useNavigate();

	const [artwork, setArtwork] = React.useState(art);
	const [Artloaded, setArtloaded] = React.useState(art ? true : false);

	const ArtworkUrl = useGAS("getartworkbyid", params.id);

	// stateにない場合質問情報をfetchする
	React.useEffect(() => {
		const fetchData = async () => {
			const data = await useFetch(ArtworkUrl);

			setArtwork(data);
			setArtloaded(true);
		};
		if (!art) {
			fetchData();
		}
	}, []);

	return (
		<div className='flex-grow overflow-hidden relative flex'>
			{circles.map((circle, index) => {
				return (
					<div
						key={index}
						className={"circle " + colorClasses[circle.color]}
						style={{ top: `${circle.top}%`, left: `${circle.left}%` }}
					></div>
				);
			})}
			<div className='glass w-full pb-10 grow'>
				<Container>
					<Box sx={{ my: 3 }}>
						<Button
							variant='outlined'
							size='small'
							sx={{ my: 3 }}
							onClick={() => nav("/artworks")}
						>
							作品一覧へ
						</Button>
						<Box sx={{ ml: 1 }}>
							{Artloaded ? (
								<>
									<Typography variant='h5' sx={{ mb: 1, fontWeight: 600 }}>
										{artwork.title}
									</Typography>
									<Typography variant='body1' sx={{ mb: 3 }}>
										{artwork.creator}
									</Typography>
									<Tooltip title={artwork.link}>
										<Button
											variant='contained'
											size='large'
											onClick={() => useExternalPath(artwork.link)}
										>
											遊びに行く
										</Button>
									</Tooltip>
								</>
							) : (
								<>
									<Skeleton height={"4em"} sx={{ mb: 0.5, maxWidth: 600 }} />
									<Skeleton height={"2em"} sx={{ maxWidth: 150 }} />
								</>
							)}
						</Box>
					</Box>
					<Stack>
						{Artloaded ? (
							<ArtCard
								artwork={artwork}
								favs={location.state.fav}
								isfav={location.state.favClicked}
							/>
						) : (
							<Box
								sx={{
									display: "flex",
									width: "100%",
									justifyContent: "center",
								}}
							>
								<CircularProgress />
							</Box>
						)}
					</Stack>
				</Container>
			</div>
		</div>
	);
};

export default page;
