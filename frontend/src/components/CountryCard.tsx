import { useNavigate } from "react-router-dom";
import { Country } from "../types/country";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions } from "@mui/material";
import FavoriteButton from "./FavoriteButton";

interface CountryCardProps {
	country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
	const navigate = useNavigate();

	const handleDetailsClick = () => {
		navigate(`/countries/${encodeURIComponent(country.name.common)}`);
	};

	return (
		<Card
			variant="outlined"
			sx={{
				borderRadius: 0,
				borderBottomLeftRadius: 4,
				borderBottomRightRadius: 4,
				transition: "background-color 0.2s",
				backgroundColor: "#d3d3d3",
				"&:hover": {
					backgroundColor: (theme) => theme.palette.action.hover,
				},
			}}
		>
			<CardActionArea onClick={handleDetailsClick}>
				<CardMedia
					component="img"
					height="140"
					image={country.flags.png}
					alt={country.flags.alt || country.name.common}
					sx={{ objectFit: "contain" }}
				/>
				<CardContent>
					<Typography variant="h5" component="div">
						{country.name.common}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Region: {country.region}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Capital: {country.capital ? country.capital.join(", ") : "N/A"}
					</Typography>
				</CardContent>
			</CardActionArea>

			<CardActions sx={{ mt: "auto", justifyContent: "flex-end" }}>
				<FavoriteButton country={country} />
			</CardActions>
		</Card>
	);
};

export default CountryCard;
