import React,{useState} from 'react';
import WeatherCard from "./WeatherCard";

const Hero = ({onSearch,weatherData}) => {
const [city,setCity]= useState('');

const handleSearch =()=>{
  if(city.trim()!==''){
onSearch(city);
  }
};







  return (
    <section className="flex flex-col items-center justify-start min-h-[82vh] pt-16 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-2">
        Weather Simplified
      </h1>

      <p className="text-lg mb-8 md:text-xl max-w-xl">
        Get real-time weather updates in a beautiful UI.
      </p>
      <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Enter city name..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
        onClick={handleSearch}
        >
          
          Search
        </button>
        <div className="flex justify-center items-center py-8">
          
         {/* Weather Card */}
         {weatherData && <WeatherCard weather={weatherData} />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
