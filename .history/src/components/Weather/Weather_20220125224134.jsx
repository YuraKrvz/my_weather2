import {useEffect} from 'react';
import axios from 'axios';
import MyWeather from '../MyWeather/MyWeather';
import ListCities from '../ListCities/ListCities';

export default function Weather() {
   useEffect(()=>{
      
   },[])
  return (
     <>
       <MyWeather />
       <ListCities />
     </>
   );
}
