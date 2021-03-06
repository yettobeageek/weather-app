import { useState } from "react";
import React from "react";
import { FaWind } from "react-icons/fa";
const api={
  key:"3aabd747a0135550b9befab0fdd3c8b3",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query,setQuery]=useState('');
  const [weather,setWeather]=useState({});

  const search=evt=>{
    if(evt.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=>{
        setWeather(result);
        setQuery(''); 
        console.log(result);
      });
    }
  }




  const dateBuilder=(d)=>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  
  return (
    <div className={(typeof weather.main!="undefined")?
    ((weather.main.temp>25)?'app warm': 'app')  :'app'
  }>
      <main>
          <span>WEATHER APP</span> 
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search for the city..." onChange={e=>setQuery(e.target.value)}
          value={query} onKeyPress={search}/>
        
        </div>
        {(typeof weather.main!="undefined")?(
          <div>
               <div className="location-box">
             <div className="location">
                {weather.name},{weather.sys.country}
               </div>
                 <div className="date">{dateBuilder(new Date())}</div>
                     </div>
               <div className="weather-box">
                 <div className="temp">{Math.round(weather.main.temp)}°C</div>
              </div>
              <div className="humidity">Humidity &nbsp; <FaWind> </FaWind></div>
              <div className="humid">{weather.main.humidity}</div>
                   <div className="weather">{weather.weather[0].main}</div>
                   {/* <div className="weather-desc">("{weather.weather[0].description}")</div> */}
       </div>
        ):('')}
       

       <div className="flex-container">
         <div>A</div>
         <div>B</div>
         <div>C</div>
       </div>
      </main>
      

     
    </div>
  );
  }


export default App;
