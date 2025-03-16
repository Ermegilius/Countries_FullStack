import { useNavigate } from "react-router-dom";
import { Country } from "../types/country";
import { Card, CardActionArea, CardContent, CardActions, Typography } from "@mui/material";
import FavoriteButton from "./FavoriteButton";
import { ImageOptimizer } from "./ImageOptimizer";
import React from "react";

interface CountryCardProps {
	country: Country;
}

const cardStyles = {
	borderRadius: 0,
	borderBottomLeftRadius: 4,
	borderBottomRightRadius: 4,
	transition: "background-color 0.5s",
	backgroundColor: "#d1d1d1",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",
};

const actionAreaStyles = {
	display: "flex",
	flexDirection: "column",
	width: "100%",
};

const CountryCard = React.memo(({ country }: CountryCardProps) => {
	const navigate = useNavigate();

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
					<Typography variant="body2" color="text.secondary">
						Region: {region} ({subregion})
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Capital: {capital ? capital.join(", ") : "N/A"}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Population: {population.toLocaleString()}
					</Typography>
					<Typography variant="body2" color="text.secondary">
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
