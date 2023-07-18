import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
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

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/api/cityList/${id}`);
      const data = await res.json();

      setCurrentCity(data);
    } catch (error) {
      alert("There is a error");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const options = {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      };
      const res = await fetch(`${BASE_URL}/api/cityList`, options);
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch (error) {
      alert("There is a error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity, createCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  if (useContext(CitiesContext) === undefined) throw new Error("You used CitiesCOntext ouside of CitiesProvider");
  return useContext(CitiesContext);
}

export { CitiesProvider, useCities };
