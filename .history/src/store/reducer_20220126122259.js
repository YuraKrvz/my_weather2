import store from './store';

const initialState = {}

export const reducer = (state = initialState, action)=>{
   switch(action.type) {
     case 'ADD_NAME':
       return {
         ...state,
         ...action.payload,
       };
       default: return state;
   }
 }