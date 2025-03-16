import { Country } from "../types/country";
import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAuth } from "../context/AuthContext";
import { useFavorites } from "../context/FavoritesContext";

interface FavoriteButtonProps {
	country: Country;
}

const FavoriteButton = ({ country }: FavoriteButtonProps) => {
	const { user } = useAuth();
	const { favoriteStatus, isLoading, toggleFavorite } = useFavorites();

	const isFavorite = favoriteStatus[country.name.common] || false;

	const handleToggleFavorite = async (e: React.MouseEvent) => {
		e.stopPropagation(); // Prevent card click from triggering
		if (!user) return;

		await toggleFavorite(country.name.common, country.cca3, country.flags.png || country.flags.svg);
	};

	if (!user) {
		return null; // Don't render button for non-authenticated users
	}

	return (
		<Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
			<IconButton
				color={isFavorite ? "error" : "default"}
				onClick={handleToggleFavorite}
				disabled={isLoading}
				aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
			>
				{isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
			</IconButton>
		</Tooltip>
	);
};

export default FavoriteButton;
