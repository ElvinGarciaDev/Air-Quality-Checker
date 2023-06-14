import React, { useState } from "react";
import "./App.css";
import CitySearch from "./components/CitySearch";
import 'bootstrap/dist/css/bootstrap.min.css'
import AirQualityCard from "./components/AirQualityCard";



function App() {
  const [airQualityData, setAirQualityData] = useState(null);

  const [error, setError] = useState(null);

  const getAirQuality = async (city) => {
    try {
      const response = await fetch(
        `https://api.waqi.info/feed/${city}/?token=efb14871331897cb958aa50e65c142dcc001f8a8`
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
    <div className="container">
      <h1 className="mt-5 mb-3">Air Quality Index Checker</h1>

      {/* Call the CitySearh comp and pass in the getAirQuality function as a prop */}
      <CitySearch getAirQuality={getAirQuality} />

{/* if the error state contains an error. show this div */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

{/* if there is data on the airQualityData state. Show it */}
      {airQualityData && (
        //Air quality card component
        // Pollutant info
        <>
                <AirQualityCard data={airQualityData}/>


        </>
      )}
    </div>
  );
}

export default App;
