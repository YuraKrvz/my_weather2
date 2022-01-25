import React from 'react';

export default function MyWeather() {
  return (
   <div className={s.wrapper}>
      <div className={s.main}>
         <span>
            <span>
               <p className={s.temp}></p>
               <p className={s.day}>Today</p>
            </span>
            <img src="" alt="" />
         </span>
         <p className={s.time}></p>
         <p className={s.city}></p>
      </div>
      <div className={s.description}>
         
      </div>
   </div>
  );
}
