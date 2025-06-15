
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


function App() {
const [weatherData, setWeatherData]=useState(null);
const fetchWeather =async (city)=>{
try{
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=929d451e62bb66d65a4ea3f91df5f102&units=metric`)
  const data = await response.json();
  console.log(data)
  setWeatherData(data);
}
catch(error){
  console.error("failed to fetch weather:",error);
}

};








  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero  onSearch={fetchWeather} weatherData={weatherData} />
     
      </main>

      <Footer />
    </div>
  );
}

export default App;