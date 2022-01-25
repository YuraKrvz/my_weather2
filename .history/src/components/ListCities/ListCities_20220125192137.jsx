import React from 'react';

export default function ListCities() {
  return (
     <section className={s.wrapper}>
       <div className={s.city}>
         <h6 className={s.name}>name city</h6>
         <p className={s.date}>date</p>
         <img />
         <p className={s.temp}>temp</p>
       </div>     
     </section>
  );
}
