import React, { useState } from "react";


const CitySearch = ({getAirQuality}) => {

    const handleInputChange = () => {

    }

    return (
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="Enter city..." onChange={handleInputChange} />
            <button type="submitt">Search</button>
        </form>
    )

}