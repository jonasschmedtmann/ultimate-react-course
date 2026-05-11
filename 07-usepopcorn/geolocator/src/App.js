import { useState } from "react";

function useGeoLocation() {
  const [isLoading, setIsLoading] = useState(false);

  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  function getposition() {
    if (!navigator.geolocation)
      return setError("Your browser does not allow geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
    );
  }

  return { isLoading, position, error, getposition };
}

export default function App() {
  const [countClicks, setCountClicks] = useState(0);
  function handleClick() {
    setCountClicks((count) => count + 1);
    getposition();
  }
  const {
    isLoading,
    position: { lat, lng },
    error,
    getposition,
  } = useGeoLocation();
  // const { lat, lng } = position;

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        Get my location
      </button>
      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat},{lng}
          </a>
        </p>
      )}
      <p>You requested position {countClicks} times</p>
    </div>
  );
}
