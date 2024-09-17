import React from "react";
import { useWeather } from "../context/Weather";

const InputItem = () => {

    const Weather = useWeather();
   
    return (
        <div>
            <input className="input-field" 
            placeholder="Enter your city name" 
            value={Weather.searchCity}
            onChange={(e) => Weather.setSearchCity(e.target.value)} />
        </div>
    );
};

export default InputItem;