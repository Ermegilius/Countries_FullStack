import { Country } from "../types/country";

interface CountryListItemProps {
	country: Country;
}

const CountryListItem = ({ country }: CountryListItemProps) => {
	return (
		<div>
			<h1>{country.name.common}</h1>
			<p>Region: {country.region}</p>
			<p>Capital: {country.capital ? country.capital.join(", ") : "N/A"}</p>
			<img src={country.flags.png} alt={country.flags.alt || country.name.common} />
		</div>
	);
};

export default CountryListItem;
