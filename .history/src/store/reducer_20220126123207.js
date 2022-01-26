
import {ADD_CITY} from './constants';

const initialState = {name: 'yura'}

export const reducer = (state = initialState, action)=>{
   switch(action.type) {
     case ADD_CITY:
       return {
         ...state,
         ...action.payload,
       };
       default: return state;
   }
 }