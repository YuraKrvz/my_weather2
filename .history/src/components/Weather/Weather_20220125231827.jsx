import {useState, useEffect} from 'react';
import axios from 'axios';
import MyWeather from '../MyWeather/MyWeather';
import ListCities from '../ListCities/ListCities';
import { CurrentCountryByCoordinates } from '../../config';

export default function Weather() {
   const [currentPos, setCurrentPos] = useState(null);

   useEffect(()=>{
      navigator.geolocation.getCurrentPosition( loc => {
         axios.get(CurrentCountryByCoordinates(loc.coords.latitude, loc.coords.longitude))
         .then((res)=> setCurrentPos(res))
      })
      
      
   },[])
  return (
     <>
      //  {currentPos && <>
      //    <MyWeather city={currentPos} />
      //    <ListCities />
      //  </>}  
      <MyWeather city={currentPos} />
      <ListCities />
       
     </>
   );
}
