import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:3000";

const CitiesContext = createContext();

const ActionTypes = {
  FETCH_CITIES_SUCCESS: "FETCH_CITIES_SUCCESS",
  GET_CITY_SUCCESS: "GET_CITY_SUCCESS",
  CREATE_CITY_SUCCESS: "CREATE_CITY_SUCCESS",
  DELETE_CITY_SUCCESS: "DELETE_CITY_SUCCESS",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

// Reducer function
function citiesReducer(state, action) {
  switch (action.type) {
    case ActionTypes.FETCH_CITIES_SUCCESS:
      return { ...state, cities: action.payload, isLoading: false, error: null };
    case ActionTypes.GET_CITY_SUCCESS:
      return { ...state, currentCity: action.payload, isLoading: false, error: null };
    case ActionTypes.CREATE_CITY_SUCCESS:
      return { ...state, cities: [...state.cities, action.payload], isLoading: false, error: null };
    case ActionTypes.DELETE_CITY_SUCCESS:
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: false,
        error: null,
      };
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
}
function CitiesProvider({ children }) {
  const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: null,
  };

  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(citiesReducer, initialState);

  useEffect(() => {
    async function fetchCities() {
      try {
        dispatch({ type: ActionTypes.SET_LOADING, payload: true });
        const res = await fetch(`${BASE_URL}/api/cityList`);
        const data = await res.json();

        dispatch({ type: ActionTypes.FETCH_CITIES_SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: ActionTypes.SET_ERROR, payload: "Failed to fetch cities" });
      } finally {
        dispatch({ type: ActionTypes.SET_LOADING, payload: false });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, payload: true });
      const res = await fetch(`${BASE_URL}/api/cityList/${id}`);
      const data = await res.json();

      dispatch({ type: ActionTypes.GET_CITY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ActionTypes.SET_ERROR, payload: "Failed to get city" });
    } finally {
      dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    }
  }

  async function createCity(newCity) {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, payload: true });
      const options = {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCity),
      };
      const res = await fetch(`${BASE_URL}/api/cityList`, options);
      const data = await res.json();
      dispatch({ type: ActionTypes.CREATE_CITY_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ActionTypes.SET_ERROR, payload: "Failed to create city" });
    } finally {
      dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: ActionTypes.SET_LOADING, payload: true });
      const options = {
        method: "DELETE",
      };
      await fetch(`${BASE_URL}/api/cityList/${id}`, options);
      dispatch({ type: ActionTypes.DELETE_CITY_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: ActionTypes.SET_ERROR, payload: "Failed to delete city" });
    } finally {
      dispatch({ type: ActionTypes.SET_LOADING, payload: false });
    }
  }

  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity, createCity, deleteCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) throw new Error("You used CitiesContext outside of CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
