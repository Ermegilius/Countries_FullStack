import { useNavigate } from "react-router-dom";
import { Country } from "../types/country";
import { Card, CardActionArea, CardContent, CardActions, Typography } from "@mui/material";
import FavoriteButton from "./FavoriteButton";
import { ImageOptimizer } from "./ImageOptimizer";
import React from "react";
import { useTheme } from "../theme/useTheme";
interface CountryCardProps {
	country: Country;
}

const actionAreaStyles = {
	display: "flex",
	flexDirection: "column",
	width: "100%",
};

const CountryCard = React.memo(({ country }: CountryCardProps) => {
	const { mode } = useTheme();
	const navigate = useNavigate();

	const cardStyles = {
		borderRadius: 0,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
		transition: "background-color 0.5s",
		backgroundColor: mode === "dark" ? "#333333" : "#ffffff",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	};

	const handleDetailsClick = () => {
		navigate(`/countries/${encodeURIComponent(country.name.common)}`);
	};

	const {
		flags: { png, alt },
		name: { common },
		region,
		subregion,
		capital,
		population,
		currencies,
	} = country;

	return (
		<Card onClick={handleDetailsClick} variant="outlined" sx={cardStyles}>
			<CardActionArea sx={actionAreaStyles}>
				<ImageOptimizer src={png} alt={alt || common} height="140px" objectFit="contain" />
				<CardContent>
					<Typography variant="h5" component="div">
						{common}
					</Typography>
					<Typography variant="body2">
						Region: {region} ({subregion})
					</Typography>
					<Typography variant="body2">Capital: {capital ? capital.join(", ") : "N/A"}</Typography>
					<Typography variant="body2">Population: {population.toLocaleString()}</Typography>
					<Typography variant="body2">
						Currency:{" "}
						{currencies
							? Object.values(currencies)[0].name + " (" + Object.values(currencies)[0].symbol + ")"
							: "N/A"}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{ mt: "auto", justifyContent: "flex-end", p: 1 }}>
				<FavoriteButton country={country} />
			</CardActions>
		</Card>
	);
});

export default CountryCard;
