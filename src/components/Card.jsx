import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
    const Weather = useWeather();
    return (
        <div className="card">
            <img src={Weather?.data?.current?.condition?.icon} alt="" />
            <h2>{Weather?.data?.current?.temp_c && `${Weather.data.current.temp_c}° C`}</h2>  
            {/*<h2>{Weather?.data?.current?.temp_c !== undefined ? `${Weather.data.current.temp_c}° C` : 'Loading...'}</h2>*/}

            <h5>{Weather?.data?.location?.name} {Weather?.data?.location?.name && Weather?.data?.location?.region && ', '} {Weather?.data?.location?.region}</h5>
            <h4>{Weather?.data?.location?.country}</h4>
        </div>
        );
};

export default Card;