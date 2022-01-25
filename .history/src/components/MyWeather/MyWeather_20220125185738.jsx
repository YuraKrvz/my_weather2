import React from 'react';
import { GeneratorSvgIcon } from '../../assets/GeneratorSvgIcon';
import s from './MyWeather.module.css';

export default function MyWeather() {
  return (
   <section className={s.wrapper}>
      <div className={s.main}>
         <span className={s.main__inner}>
            <span>
               <p className={s.temp__main}>20°</p>
               <p className={s.day}>Today</p>
            </span>
            <GeneratorSvgIcon id='sun' className={s.main__icon} />
         </span>
         <p className={s.time}>Time: 21:45</p>
         <p className={s.city}>City: Irpin</p>
      </div>
      <div className={s.description}>
         <ul className={s.list}>
            <li className={s.temp__description}><GeneratorSvgIcon id='temp' className={s.temp__description_img} /> temperature: </li>
            <li className={s.pressure}>pressure</li>
            <li className={s.precipitation}>precipitation</li>
            <li className={s.wind}>wind</li>
         </ul>
      </div>
   </section>
  );
}
