import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city by clicking on city on the map" />;

  const countriesUnique = new Set(cities.map((city) => JSON.stringify({ country: city.country, emoji: city.emoji })));
  const countries = [...countriesUnique].map((each) => JSON.parse(each));

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.emoji} />;
      })}
    </ul>
  );
}

export default CountryList;
