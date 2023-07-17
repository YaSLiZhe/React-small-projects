import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesProvider";
import Button from "./Button";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlPosition";

function Map() {
  const navigate = useNavigate();

  const { cities } = useCities();
  const { isLoading: isLoadingPosition, position: geoloactionPosition, getPosition } = useGeolocation();
  const [mapPosition, setMapposition] = useState([40, 20]);
  const [mapLat, mapLng] = useUrlPosition();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapposition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );
  useEffect(
    function () {
      if (geoloactionPosition) setMapposition([geoloactionPosition.lat, geoloactionPosition.lng]);
    },
    [geoloactionPosition]
  );

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "loading..." : "Use your position"}
      </Button>
      <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className={styles.map}>
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
        <ChangeMaker mapPosition={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeMaker({ mapPosition }) {
  const map = useMap();
  map.setView(mapPosition);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvent({ click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`) });
}

export default Map;
