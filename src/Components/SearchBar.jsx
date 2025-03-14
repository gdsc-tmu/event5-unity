import { Chip, InputBase, Paper, Stack } from "@mui/material";
import React from "react";

export const SearchBar = ({ chips, setChips, sx }) => {
	const [inputValue, setInputValue] = React.useState("");

	const handleKeyDown = (event) => {
		if (event.key === "Enter" && inputValue.trim() !== "") {
			setChips([...chips, inputValue.trim()]);
			setInputValue("");
			event.preventDefault(); // Enterのデフォルト動作を防ぐ
		}
	};

	const handleDelete = (chipToDelete) => {
		setChips(chips.filter((chip) => chip !== chipToDelete));
	};

	// from MUI
	return (
		<Paper sx={{ p: 2, mt: 3, ...sx }} elevation={3}>
			<Stack spacing={1} direction='row' flexWrap='wrap'>
				{chips.map((chip, index) => (
					<Chip key={index} label={chip} onDelete={() => handleDelete(chip)} />
				))}
			</Stack>
			<InputBase
				sx={{ mt: 1 }}
				fullWidth
				placeholder='Tipsを検索'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</Paper>
	);
};
