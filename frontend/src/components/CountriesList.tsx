import { useEffect } from "react";
import {
	fetchAllCountries,
	selectAllCountries,
	selectCountriesError,
	selectCountriesLoading,
} from "../store/slices/countriesSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import CountryCard from "./CountryCard";
import Grid from "@mui/material/Grid2";

const CountriesList = () => {
	const dispatch = useAppDispatch();
	const countries = useAppSelector(selectAllCountries);
	const loading = useAppSelector(selectCountriesLoading);
	const error = useAppSelector(selectCountriesError);

	useEffect(() => {
		if (countries.length === 0) {
			dispatch(fetchAllCountries());
		}
	}, [countries.length, dispatch]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
			{countries.map((country) => (
				<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={country.name.common}>
					<CountryCard country={country} />
				</Grid>
			))}
		</Grid>
	);
};

export default CountriesList;
