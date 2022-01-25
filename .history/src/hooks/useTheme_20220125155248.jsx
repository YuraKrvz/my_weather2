import {useState, useLayoutEffect} from 'react';

export default function useTheme() {
   const [theme, setTheme] = useState('light');

   useLayoutEffect( ()=>{
      document.documentElement.setAttribute('data-theme', theme);
   }, [theme] )
}
