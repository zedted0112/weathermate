import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather || !weather.main || !weather.weather) return null;

  const { name, main, weather: weatherDetails } = weather;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-80 text-center mx-auto">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 text-sm mb-4">
        {weatherDetails[0]?.main} - {weatherDetails[0]?.description}
      </p>
      <div className="text-5xl font-bold mb-4">
        {Math.round(main.temp)}°C
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>Min: {Math.round(main.temp_min)}°C</span>
        <span>Max: {Math.round(main.temp_max)}°C</span>
      </div>
    </div>
  );
};

export default WeatherCard;