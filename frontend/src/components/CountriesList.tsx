import { useEffect, useState } from "react";
import {
	fetchAllCountries,
	selectAllCountries,
	selectCountriesError,
	selectCountriesLoading,
} from "../store/slices/countriesSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import CountryCard from "./CountryCard";
import Grid from "@mui/material/Grid2";
import { Autocomplete, TextField } from "@mui/material";
import { Country } from "../types/country";

const CountriesList = () => {
	const dispatch = useAppDispatch();
	const countries = useAppSelector(selectAllCountries);
	const loading = useAppSelector(selectCountriesLoading);
	const error = useAppSelector(selectCountriesError);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		if (countries.length === 0) {
			dispatch(fetchAllCountries());
		}
	}, [countries.length, dispatch]);

	// Custom filter function for Autocomplete
	const filterOptions = (options: Country[], { inputValue }: { inputValue: string }) => {
		return options.filter((option) =>
			option.name.common.toLowerCase().includes(inputValue.toLowerCase())
		);
	};

	// Derive the filtered list to render in the grid
	const filteredCountries = countries.filter((option) =>
		option.name.common.toLowerCase().includes(inputValue.toLowerCase())
	);

	// Sort the countries by name without mutating the state
	const sortedCountries = [...countries].sort((a, b) =>
		a.name.common.localeCompare(b.name.common)
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<>
			<Autocomplete
				disablePortal
				options={sortedCountries}
				getOptionLabel={(option) => option.name.common}
				sx={{ width: "100%", mb: 2 }}
				renderInput={(params) => <TextField {...params} label="Country" />}
				filterOptions={filterOptions}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
			/>
			<Grid container spacing={2} sx={{ flexWrap: "wrap" }}>
				{filteredCountries.map((country) => (
					<Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={country.name.common}>
						<CountryCard country={country} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default CountriesList;
