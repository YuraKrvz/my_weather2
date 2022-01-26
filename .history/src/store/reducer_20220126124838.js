import {ADD_CITY} from './constants';

let one = {
   "coord": {
   "lon": 30.5167,
   "lat": 50.4333
   },
   "weather": [
   {
   "id": 803,
   "main": "Clouds",
   "description": "broken clouds",
   "icon": "04d"
   }
   ],
   "base": "stations",
   "main": {
   "temp": -1.05,
   "feels_like": -1.05,
   "temp_min": -2.26,
   "temp_max": -0.22,
   "pressure": 1012,
   "humidity": 81
   },
   "visibility": 10000,
   "wind": {
   "speed": 0.89,
   "deg": 350,
   "gust": 1.79
   },
   "clouds": {
   "all": 75
   },
   "dt": 1643192964,
   "sys": {
   "type": 2,
   "id": 2003742,
   "country": "UA",
   "sunrise": 1643175677,
   "sunset": 1643207958
   },
   "timezone": 7200,
   "id": 703448,
   "name": "Kyiv",
   "cod": 200
   }



const initialState = {cities: [one]}

export const reducer = (state = initialState, action)=>{
   switch(action.type) {
     case ADD_CITY:
      //   console.log(action.payload)
       return {
         ...state,
         ...action.payload,
       };
       default: return state;
   }
 }