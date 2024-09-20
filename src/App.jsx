import "../src/css/style.css"
import Search from "./component/Search"
import { useState } from "react"
function App() {
  const [data, setData] = useState({});
  console.log(data);

  return (
    <div className="app">
      <Search setData={setData} />
    <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name ? data.name.toUpperCase() : "Location not found"}</p>
        </div>
        <div className="coordinates">
         {data.coord ? <p>Latitude: {data.coord.lat.toFixed(2)}</p> : null}
         {data.coord ? <p>Longitude: {data.coord.lon.toFixed(2)}</p> : null}
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].description}</p> : null}
        </div>
      </div>
      {data.name ? (
      <div className="bottom">
        <div className="feels">
          {data.main ? <p>Feels like: {data.main.feels_like.toFixed()}°C</p> : null}
        </div>
        <div className="humidity">
          {data.main ? <p>Humidity: {data.main.humidity}%</p> : null}
        </div>
        <div className="wind">
            {data.wind ? <p>Wind speed: {data.wind.speed} MPH</p> : null}
        </div>
      </div>
      ) : null}
      </div> 
    </div>
    
  )
}

export default App
