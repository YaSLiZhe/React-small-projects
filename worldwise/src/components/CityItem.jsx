import styles from "./CityItem.module.css";

function formatReadableDate(dateString) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(new Date(dateString));
}

function CityItem({ city }) {
  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>
        <img src={`https://flagsapi.com/${emoji}/flat/24.png`} alt={cityName} />
      </span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.dates}>({formatReadableDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
