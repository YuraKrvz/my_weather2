import {ADD_CITY, DELETE_CITY} from './constants';
import {kyiv as example} from '../assets/other.js' // for example 

const initialState = {cities: [example]}

export const reducer = (state = initialState, action)=>{
   switch(action.type) {
     case ADD_CITY:
       return {
         ...state,
         cities: [...state.cities, action.payload]
       };
     case DELETE_CITY:
       return {
         ...state,
         cities: state.cities.filter(c => c.name !== action.payload.name)
       }
     default: return state;
   }
 }