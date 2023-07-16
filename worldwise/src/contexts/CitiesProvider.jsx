import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/api/cityList`);
        const data = await res.json();

        setCities(data);
      } catch (error) {
        alert("There is a error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return <CitiesContext.Provider value={{ cities, isLoading }}>{children}</CitiesContext.Provider>;
}

function useCities() {
  if (useContext(CitiesContext) === undefined) throw new Error("You used CitiesCOntext ouside of CitiesProvider");
  return useContext(CitiesContext);
}

export { CitiesProvider, useCities };
