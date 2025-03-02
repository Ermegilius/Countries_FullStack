import { useNavigate } from "react-router-dom";
import { Country } from "../types/country";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

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
				maxWidth: 345,
				transition: "background-color 0.2s",
				"&:hover": {
					backgroundColor: (theme) => theme.palette.action.hover,
				},
			}}
			onClick={handleDetailsClick}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={country.flags.png}
					alt={country.flags.alt || country.name.common}
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
		</Card>
	);
};

export default CountryCard;
