import store from './store';

const reducer = (state = initialState, action)=>{
   switch(action.type) {
     case 'ADD_NAME':
       return {
         ...state,
         ...action.payload,
       };
       default: return state;
   }
 }