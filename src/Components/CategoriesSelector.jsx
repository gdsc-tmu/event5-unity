import { Chip, Stack } from "@mui/material";

export const CategoriesSelector = ({
	selectedCategory,
	setSelectedCategory,
	sx,
}) => {
	const categories = [
		{
			label: "すべて",
			category: "all",
		},
		{
			label: "環境構築",
			category: "env",
		},
		{
			label: "機能追加",
			category: "addfunc",
		},
		{
			label: "C#を学ぶ",
			category: "fundcs",
		},
		{
			label: "その他",
			category: "other",
		},
	];
	return (
		<Stack direction='row' sx={{ ...sx }}>
			{categories.map((category, index) => (
				<Chip
					key={index}
					label={category.label}
					color={category.category === selectedCategory ? "primary" : "default"}
					onClick={() => setSelectedCategory(category.category)}
				/>
			))}
		</Stack>
	);
};
