import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>
        <img src={`https://flagsapi.com/${country.emoji}/flat/24.png`} alt={country.country} />
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
