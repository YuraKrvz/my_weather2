import React from 'react';
import { GeneratorSvgIcon } from '../../assets/GeneratorSvgIcon';
import { getDate, getTime } from '../../config';
import s from './MyWeather.module.css';

export default function MyWeather(props) {
   const date = new Date();
  return (
   <section className={s.wrapper}>
      <div className={s.main}>
         <span className={s.main__inner}>
            <span>
               <p className={s.temp__main}>{props && Math.round( props.city.data.main.temp )}°</p>
               <p className={s.day}>{getDate(date)}</p>
            </span>
            <img 
               className={s.main__icon} 
               src={`https://openweathermap.org/img/wn/${props.city.data.weather[0].icon}@2x.png`} 
               alt="pressure" 
            />
         </span>
         <p className={s.time}>Time: {getTime(date)}</p>
         <p className={s.city}>City: {props && props.city.data.name}</p>
      </div>
      <div className={s.description}>
         <ul className={s.list}>
            <li className={s.description__info}> 
               <GeneratorSvgIcon id='temp' className={s.temp__description_img} /> 
               temperature: {props && Math.round( props.city.data.main.temp )}°, feels like 
               {props && Math.round( props.city.data.main.feels_like )}°
            </li>
            <li className={s.description__info}>
               <GeneratorSvgIcon id='pressure' className={s.temp__description_img} /> 
               pressure: {props && props.city.data.main.pressure } мм mercury column
            </li>
            <li className={s.description__info}>
               <GeneratorSvgIcon id='rain' className={s.temp__description_img} /> 
               precipitation: {props && props.city.data.weather[0].description}
               <GeneratorSvgIcon id={`${props.city.data.weather[0].description}`} />
            </li>
            <li className={s.description__info}>
               <GeneratorSvgIcon id='wind' className={s.temp__description_img} /> 
               wind: {props && props.city.data.wind.speed}
               , deg: {props && props.city.data.wind.deg}
               , gust: {props && props.city.data.wind.gust}
            </li>
         </ul>
      </div>
   </section>
  );
}
