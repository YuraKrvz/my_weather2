import React from 'react';
import s from './ListCities.module.css';

export default function ListCities() {
  return (
     <section className={s.wrapper}>
       <div className={s.city}>
         <h6 className={s.name}>New York</h6>
         <p className={s.date}>25.01.2022</p>
         <img />
         <p className={s.temp__max}>temp</p>
         <p className={s.temp__min}>temp</p>
         <p className={s.precipitation}>temp</p>
       </div>     

       <div className={s.city}>
         <h6 className={s.name}>Dallas</h6>
         <p className={s.date}>25.01.2022</p>
         <img />
         <p className={s.temp__max}>temp</p>
         <p className={s.temp__min}>temp</p>
         <p className={s.precipitation}>temp</p>
       </div>     
     </section>
  );
};