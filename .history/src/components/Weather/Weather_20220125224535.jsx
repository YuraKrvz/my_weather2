import {useState, useEffect} from 'react';
import axios from 'axios';
import MyWeather from '../MyWeather/MyWeather';
import ListCities from '../ListCities/ListCities';
import { CurrentCountryByCoordinates } from '../../config';

export default function Weather() {
   const [currentPos, setCurrentPos] = useState(null);

   useEffect(()=>{
      navigator.geolocation.getCurrentPosition( loc =>  setCurrentPos(loc))
      
      axios.get(CurrentCountryByCoordinates(currentPos.latitude, ))
   },[])
  return (
     <>
       <MyWeather />
       <ListCities />
     </>
   );
}
