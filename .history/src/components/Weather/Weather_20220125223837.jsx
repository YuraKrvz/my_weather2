import React from 'react';
import axios from 'axios';
import MyWeather from '../MyWeather/MyWeather';
import ListCities from '../ListCities/ListCities';

export default function Weather() {
  return (
     <>
       <MyWeather />
       <ListCities />
     </>
   );
}
