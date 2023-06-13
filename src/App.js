import React, { useState } from "react";
import "./App.css";

function App() {
  const [airQualityData, setAirQualityData] = useState(null);

  const [error, setError] = useState(null);

  const getAirQuality = async (city) => {
    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${city}/?token=${process.env.REACT_APP_AQI_API_TOKEN}`
      );
      const data = await response.json();

      console.log(data);

      // If the request came back and it's valid set the state of the airQuality. and set the errorState to null
      if (response.ok && data.status === "ok") {
        setAirQualityData(data.data);
        setError(null);
      } else {
        // if the request is incomplete set the error
        setError(
          "Sorry, we coudn't find the city you were looking for. Try another location nearby or ensure your spelling is correct."
        );
        setAirQualityData(null);
      }
    } catch (error) {
      console.error("network error:", error);
      setError("Sorry, something went wrong");
      setAirQualityData(null);
    }
  };

  return (
    <div>
      <h1>Hello World</h1>

      {/* Call the CitySearh comp and pass in the getAirQuality function as a prop */}
      <CitySearch getAirQuality={getAirQuality} />
    </div>
  );
}

export default App;
