import React from "react";
import axios from "axios";
import LoadingIcons from 'react-loading-icons';


export default function Weather (props){
    function handleResponse(response){
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°`)
    }
    let units = "Imperial";
    let apiKey = "ce7559a40e1096d539e469e7e924e165";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&unit=${units}`;

    axios.get(apiUrl).then(handleResponse);
    return (
       <LoadingIcons.SpinningCircles
       Puff stroke="#000000"
       strokeOpacity={.125}
       speed={1} />
        
    );
}