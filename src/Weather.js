import React from "react";
import SearchEngine from "./SearchEngine.js";
import axios from "axios";


export default function Weather (props){
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°`)
    }
    let units = "Imperial";
    let apiKey = "ce7559a40e1096d539e469e7e924e165";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&unit=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <div>
            <SearchEngine />
        
        </div>
       
        
    );
}