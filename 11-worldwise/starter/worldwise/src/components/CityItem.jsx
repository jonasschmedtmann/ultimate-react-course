import styles from "./CityItem.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const formalDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function CityItem({ city, isLoading }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity, deleteCity } = useCities();
  console.log(position);

  function handleClick(e) {
    e.preventDefault();
    console.log("test");
    deleteCity(id);
  }
  if (isLoading) return <Spinner />;

  if (!city.id)
    return <Message message="add your first city by clicking on the map" />;
  return (
    <li
      className={`${styles.cityItem} ${city.id === currentCity.id ? styles["cityItem--active"] : ""}`}
    >
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formalDate(date)}</time>
        <button className={styles.deleteBtn} onClick={(e) => handleClick(e)}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
