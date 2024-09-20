import { useState, useEffect } from "react";
export default function Search({setData}) {
  
  const [city, setCity] = useState("lagos");

  const url="https://api.openweathermap.org/data/2.5/weather?"
  const apiKey="91aa8390423830bd8c2d944089d61011"

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`${url}q=${city}&appid=${apiKey}&units=metric`)
      const data = await response.json()
      setData(data)
      
    }

    fetchData()
  },[city,setData])

  return (
    <div className="search">
      <input type="text" placeholder="Search Location..." onChange={(e) => setCity(e.target.value)} value={city} />
    </div>
  )
}