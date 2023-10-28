import { useParams, useSearchParams } from "react-router-dom";
// import styles from "./City.module.css";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",
//   }).format(new Date(date));

function City() {
  const {id} =useParams()
    const [searchParams, ] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
  // const currentCity = {
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };

  // const { cityName, emoji, date, notes } = currentCity;

  return (
    <>
      <h1>City {id}</h1>
      <p>
        {" "}
        Position: {lat}, {lng}
      </p>
    </>
    // <div className={styles.city}>
    //   <div className={styles.row}>
    //     <h6>City name</h6>
    //     <h3>
    //       <span>{emoji}</span> {cityName}
    //     </h3>
    //   </div>

    //   <div className={styles.row}>
    //     <h6>You went to {cityName} on</h6>
    //     <p>{formatDate(date || null)}</p>
    //   </div>

    //   {notes && (
    //     <div className={styles.row}>
    //       <h6>Your notes</h6>
    //       <p>{notes}</p>
    //     </div>
    //   )}

    //   <div className={styles.row}>
    //     <h6>Learn more</h6>
    //     <a
    //       href={`https://en.wikipedia.org/wiki/${cityName}`}
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       Check out {cityName} on Wikipedia &rarr;
    //     </a>
    //   </div>

    //   <div>
    //     <ButtonBack />
    //   </div>
    // </div>
  );
}

export default City;
