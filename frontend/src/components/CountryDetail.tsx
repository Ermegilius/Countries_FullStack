import { useParams, useNavigate } from "react-router-dom";
import {
	fetchAllCountries,
	selectAllCountries,
	selectCountriesError,
	selectCountriesLoading,
} from "../store/slices/countriesSlice";
import { Country } from "../types/country";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import { Button } from "@mui/material";

const CountryDetail = () => {
	const { name } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const countries = useAppSelector(selectAllCountries);
	const loading = useAppSelector(selectCountriesLoading);
	const error = useAppSelector(selectCountriesError);

	const selectedCountry = countries.find(
		(c: Country) => c.name.common.toLowerCase() === decodeURIComponent(name || "").toLocaleLowerCase()
	);

	useEffect(() => {
		if (countries.length === 0) {
			dispatch(fetchAllCountries());
		}
	}, [countries.length, dispatch]);

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{selectedCountry && (
				<div>
					<h1>{selectedCountry.name.common}</h1>
					<p>Official Name: {selectedCountry.name.official}</p>
					<p>Region: {selectedCountry.region}</p>
					<p>Subregion: {selectedCountry.subregion}</p>
					<p>Population: {selectedCountry.population.toLocaleString()}</p>
					<p>Capital: {selectedCountry.capital ? selectedCountry.capital.join(", ") : "N/A"}</p>
					<p>
						Currencies:{" "}
						{selectedCountry.currencies
							? Object.values(selectedCountry.currencies)
									.map((currency) => `${currency.name} (${currency.symbol})`)
									.join(", ")
							: "N/A"}
					</p>
					<img
						src={selectedCountry.flags.png}
						alt={selectedCountry.flags.alt || selectedCountry.name.common}
					/>
					<Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate(-1)}>
						Back
					</Button>
				</div>
			)}
		</>
	);
};

export default CountryDetail;
