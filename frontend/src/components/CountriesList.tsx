import { useEffect } from "react";
import {
	fetchAllCountries,
	selectAllCountries,
	selectCountriesError,
	selectCountriesLoading,
} from "../store/slices/countriesSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import CountryListItem from "./CountryListItem";

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
		<div>
			{countries.map((country) => (
				<CountryListItem key={country.name.common} country={country} />
			))}
		</div>
	);
};

export default CountriesList;
