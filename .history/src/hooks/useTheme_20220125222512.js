import {useState, useLayoutEffect} from 'react';

export default function useTheme() {
   const [theme, setTheme] = useState(false);

   useLayoutEffect( ()=>{
      document.documentElement.setAttribute('data-theme', theme);
   }, [theme] )

   return {theme, setTheme};
}
