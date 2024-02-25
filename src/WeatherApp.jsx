import React, { useState } from 'react'
import searchicon from './Components/Assets/search.png'
import cloudicon from './Components/Assets/cloud.png'
import rainicon from './Components/Assets/rain.png'
import snowicon from './Components/Assets/snow.png'
import windicon from './Components/Assets/wind.png'
import humidityicon from './Components/Assets/humidity.png'
import cleariicon  from './Components/Assets/clear.png'
import drizzleicon from './Components/Assets/drizzle.png'
import './WeatherApp.css'
const WeatherApp = () => {
  let api="01261bb64b8f3a5a83d98883db2a2d36";
  const[icon,seticon]=useState(cleariicon);
  const search= async()=>
  {
    const element=document.getElementsByClassName("cityinput");
    if(element[0].value==="")
    {
      alert("Location not Given");
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api}`;    
    let resp=await fetch(url);
    let data= await resp.json();
    const humidity=document.getElementsByClassName("humidity-percent");
    const wind=document.getElementsByClassName("wind-rate");
    const temp=document.getElementsByClassName("weather-temp");
    const loc=document.getElementsByClassName("weather-location");
    humidity[0].innerHTML=data.main.humidity +"%";
    wind[0].innerHTML=Math.floor(data.wind.speed)+"KM/h";
    temp[0].innerHTML=Math.floor(data.main.temp)+"° C";
    loc[0].innerHTML=data.name;
    if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n")
    {
      seticon(cleariicon);
    }
    else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n")
    {
      seticon(cloudicon);
    }
    else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n")
    {
      seticon(drizzleicon);
    }
    else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n")
    {
      seticon(drizzleicon);
    }
    else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n")
    {
      seticon(rainicon);
    }
    else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n")
    {
      seticon(cloudicon);
    }
    else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n")
    {
      seticon(snowicon);
    }
    else{
      seticon(cleariicon);
    }

  }
  return (
    <div className='container text-center'>
        <div className='top-bar'>
            <input type="text" className='cityinput' placeholder='Enter City'/>
            <div className="search-icon" onClick={()=>{search();}}>
                <img src={searchicon} alt="" />
            </div>
        </div>
      <div className="weather-image">
        <img src={icon} alt="" />
      </div>
      <div className="weather-temp">25° C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
            <img src={humidityicon} alt="" className='icon'/>
            <div className="data">
                <div className="humidity-percent"></div>
                <div className="text">Humidity</div>
            </div>
            <img src={windicon} alt="" className='icon'/>
            <div className="data">
                <div className="wind-rate"></div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
