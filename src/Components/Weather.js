import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import { isAppLoading, isNotLoading } from "../redux/slices/isLoadingSlice";


const Weather = () => {
    const [weather, setWeather] = useState();
    const display = useSelector(selectDisplay);
    const dispatch = useDispatch();
    const latitude = display.capitalInfo.latlng[0];
    const longitude = display.capitalInfo.latlng[1];


   useEffect(() => {
    dispatch(isAppLoading());
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: `${latitude} , ${longitude}`},
        headers: {
          'X-RapidAPI-Key': 'd485a37be0mshccff92bdd14ba32p15a9f3jsn5044d52f03f8',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          setWeather(response.data);
          dispatch(isNotLoading());
      }).catch(function (error) {
          console.error(error);
          dispatch(isNotLoading());
      });
   }, []);

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather?.current?.wind_mph} mph {" "}
                        {weather?.current?.wind_dir}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
