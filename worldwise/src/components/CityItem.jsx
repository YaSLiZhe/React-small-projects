import { useCities } from "../contexts/CitiesProvider";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

function formatReadableDate(dateString) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "long", year: "numeric" }).format(new Date(dateString));
}

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useCities();
  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity.id ? styles["cityItem--active"] : ""}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>
          <img src={`https://flagsapi.com/${emoji}/flat/24.png`} alt={cityName} />
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.dates}>({formatReadableDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
