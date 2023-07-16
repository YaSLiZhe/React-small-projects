import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesProvider";
function Map() {
  const [searchParams] = useSearchParams();
  const { cities } = useCities();

  const [mapPosition, setMapposition] = useState([38.9108, -75.5277]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={true} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <span>
                <img src={`https://flagsapi.com/${city.emoji}/flat/24.png`} alt={city.cityName} />
              </span>{" "}
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
