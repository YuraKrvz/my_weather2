import {useState, useEffect} from 'react';
import axios from 'axios';
import MyWeather from '../MyWeather/MyWeather';
import ListCities from '../ListCities/ListCities';
import { CurrentCountryByCoordinates } from '../../config';

export default function Weather() {
   const [currentPos, setCurrentPos] = useState(null);

   useEffect(()=>{
      navigator.geolocation.getCurrentPosition( loc => {
         console.log(loc.coords.)
         // axios.get(CurrentCountryByCoordinates(loc.latitude, loc.longitude))
         // .then((res)=> console.log(res))
      })
      
      
   },[])
  return (
     <>
       <MyWeather />
       <ListCities />
     </>
   );
}
