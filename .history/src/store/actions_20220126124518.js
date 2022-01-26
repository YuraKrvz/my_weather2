import {ADD_CITY} from './constants';

export const addCity = (obj) => ({
   type: ADD_CITY,
   payload: obj
});