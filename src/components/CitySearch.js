import React, { useState } from "react";


const CitySearch = ({getAirQuality}) => {

    const [inputValue, setInutValue] = useState('')

    // Update the input state when the user types something
    const handleInputChange = (e) => {
        setInutValue(e.target.value)

    }

    // When user submit their city
    const handleSearch = (e) => {
        e.preventDefault() // prevent the page from reloading

        // The api we are using does not recognize spaces. New York would not work. We need to replace space with -
        const formattedCity = inputValue.replace(/ /g, '-') // Take spaces and repalce them with -

        // Call the getAirQuality defined in app.js. Pass in whatever is in the input
        getAirQuality(formattedCity)

        // Empty the input once the form is submitted
        setInutValue("")
    }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={inputValue} placeholder="Enter city..." onChange={handleInputChange} />
            <button type="submitt">Search</button>
        </form>
    )

}

export default CitySearch;