

const AirQualityCard = ({data}) => {

    // Destructuring the obj that is beign passed in as a prop
    const {aqi, city, dominentpol, time} = data

    return (
        <div>
            <h5>{city.name}</h5>
            <h6>Air Quality Index: {aqi}</h6>
            <p>Dominant Pollutant: {dominentpol}</p>
            <p>Last Updated: {time.s}</p>
        </div>
    )

}

export default AirQualityCard;