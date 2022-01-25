import React from 'react';

export default function MyWeather() {
  return (
   <div className={s.wrapper}>
      <div className={s.main}>
         <span>
            <p className={s.temp}></p>
            <p className={s.day}>Today</p>
         </span>
      </div>
      <div className={s.description}></div>
   </div>
  );
}
