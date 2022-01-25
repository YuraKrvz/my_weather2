import React from 'react';

export default function MyWeather() {
  return (
   <div className={s.wrapper}>
      <div className={s.main}>
         <p className={s.temp}></p>
      </div>
      <div className={s.description}></div>
   </div>
  );
}
