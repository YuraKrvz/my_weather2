import React from 'react';

export default function MyWeather() {
  return (
   <div className={s.wrapper}>
      <div className={s.main}>
         <span>
            <span>
               <p className={s.temp__main}></p>
               <p className={s.day}>Today</p>
            </span>
            <img src="" alt="" />
         </span>
         <p className={s.time}></p>
         <p className={s.city}></p>
      </div>
      <div className={s.description}>
         <ul className={s.list}>
            <li className={s.temp__description}>temperature</li>
            <li className={s.pressure}>pressure</li>
            <li className={s.precipitation}>precipitation</li>
         </ul>
      </div>
   </div>
  );
}
