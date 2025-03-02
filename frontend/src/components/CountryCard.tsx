import { useNavigate } from "react-router-dom";
import { Country } from "../types/country";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface CountryCardProps {
	country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
	const navigate = useNavigate();

	const handleDetailsClick = () => {
		navigate(`/countries/${encodeURIComponent(country.name.common)}`);
	};

	return (
		<Card sx={{ borderRadius: 0 }}>
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
			<CardActions>
				<Button size="small" onClick={handleDetailsClick}>
					Details
				</Button>
			</CardActions>
		</Card>
	);
};

export default CountryCard;
