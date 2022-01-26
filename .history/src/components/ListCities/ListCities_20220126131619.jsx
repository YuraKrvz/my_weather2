import React from 'react';
import { GeneratorSvgIcon } from '../../assets/GeneratorSvgIcon';
import s from './ListCities.module.css';
import { useSelector } from 'react-redux';

export default function ListCities() {
  const store = useSelector((state)=> state.cities);
  return (
     <section className={s.wrapper}>

       {store.map(city => (
        <div className={s.city} key={city.name}>
        <span className={s.city__head_wrap}>
         <h6 className={s.name}>{city.name}</h6>
         <GeneratorSvgIcon className={s.city__close} id='close'/>
        </span>
        <p className={s.date}>25.01.2022</p>
        <GeneratorSvgIcon id='small_rain_sun' className={s.city__img} />
        <p className={s.temp__max}>{city.main.temp}</p>
        <p className={s.temp__min}>18</p>
        <p className={s.precipitation}>rainin</p>
      </div>  
       ))}   

       <button onClick={()=> console.log(store)}>show redux</button>
     </section>
  );
};