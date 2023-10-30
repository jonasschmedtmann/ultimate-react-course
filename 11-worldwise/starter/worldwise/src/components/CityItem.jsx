import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currectCity } = useCities();

  const { emoji, cityName, date, id, position } = city;
  return (
    <div>
      <li>
        <Link
          className={`${styles.cityItem} ${
            id === currectCity ? styles["cityItem--active"] : ""}`}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.name}>{cityName}</h3>
          <time className={styles.date}>({formatDate(date)})</time>
          <button className={styles.deleteBtn}>&times;</button>
        </Link>
      </li>
    </div>
  );
}

export default CityItem;
