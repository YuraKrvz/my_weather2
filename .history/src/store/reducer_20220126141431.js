import {ADD_CITY} from './constants';
import {kyiv as prime} from '../assets/other.js'

const initialState = {cities: [kyiv]}

export const reducer = (state = initialState, action)=>{
   switch(action.type) {
     case ADD_CITY:
       return {
         ...state,
         cities: [...state.cities, action.payload]
       };
       default: return state;
   }
 }