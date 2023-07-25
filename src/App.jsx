import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Companents/Form";
import Info from "./Companents/Info";
import Img from "./Companents/Img";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState([]);
  const [isCity, setIscity] = useState(false);
  const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`
        );
        setInfo(response.data);
      } catch (error) {
        null;
      }
    }

    if (city !== "") {
      fetchData();
    }
  }, [city, API_KEY]);

  const handlerCity = async newCity => {
    setCity(newCity);
  };

  return (
    <>
      <Form city={handlerCity} setIscity={setIscity} />
      <Info info={info} isCity={isCity} />
      <Img pictureName={city} isCity={isCity} />
    </>
  );
}

export default App;
