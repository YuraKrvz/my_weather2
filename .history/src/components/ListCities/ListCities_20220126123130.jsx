import React from 'react';
import { GeneratorSvgIcon } from '../../assets/GeneratorSvgIcon';
import s from './ListCities.module.css';
import { useSelector } from 'react-redux';

export default function ListCities() {
  const 

  return (
     <section className={s.wrapper}>

       <div className={s.city}>
         <span className={s.city__head_wrap}>
          <h6 className={s.name}>New York</h6>
          <GeneratorSvgIcon className={s.city__close} id='close'/>
         </span>
         <p className={s.date}>25.01.2022</p>
         <GeneratorSvgIcon id='small_rain_sun' className={s.city__img} />
         <p className={s.temp__max}>35+</p>
         <p className={s.temp__min}>18</p>
         <p className={s.precipitation}>rainin</p>
       </div>     

       <div className={s.city}>
         <span className={s.city__head_wrap}>
          <h6 className={s.name}>Dallas</h6>
          <GeneratorSvgIcon className={s.city__close} id='close' />
         </span>
         <p className={s.date}>25.01.2022</p>
         <GeneratorSvgIcon id='small_rain_sun' className={s.city__img} />
         <p className={s.temp__max}>35°</p>
         <p className={s.temp__min}>20°</p>
         <p className={s.precipitation}>rainin</p>
       </div>     
       
     </section>
  );
};