import React from 'react';
import { GeneratorSvgIcon } from '../../assets/GeneratorSvgIcon';
import s from './MyWeather.module.css';

export default function MyWeather(props) {
  console.log(props)
  return (
   <section className={s.wrapper}>
      <div className={s.main}>
         <span className={s.main__inner}>
            <span>
               <p className={s.temp__main}>20°</p>
               <p className={s.day}>25.01.2022</p>
            </span>
            <GeneratorSvgIcon id='sun' className={s.main__icon} />
         </span>
         <p className={s.time}>Time: 21:45</p>
         <p className={s.city}>City: {props && props.city.data.name}</p>
      </div>
      <div className={s.description}>
         <ul className={s.list}>
            <li className={s.description__info}> 
               <GeneratorSvgIcon id='temp' className={s.temp__description_img} /> 
               temperature: 20° - ощущается как 17°
            </li>
            <li className={s.description__info}>
               <GeneratorSvgIcon id='pressure' className={s.temp__description_img} /> 
               pressure: 765 мм ртутного столба - нормальное
            </li>
            <li className={s.description__info}>
               <GeneratorSvgIcon id='rain' className={s.temp__description_img} /> 
               precipitation: Без осадков
            </li>
            <li className={s.description__info}>
               <GeneratorSvgIcon id='wind' className={s.temp__description_img} /> 
               wind: {props && props.city.data.wind.speed}
               , deg: {props && props.city.data.wind.deg}
            </li>
         </ul>
      </div>
   </section>
  );
}
