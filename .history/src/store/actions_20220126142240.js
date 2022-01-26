import {ADD_CITY, DELETE_CITY} from './constants';

export const addCity = (obj) => ({
   type: ADD_CITY,
   payload: obj
});
export const deleteCity = (obj) => (console.log(obj));
// export const deleteCity = (obj) => ({
//    type: DELETE_CITY,
//    payload: obj
// });