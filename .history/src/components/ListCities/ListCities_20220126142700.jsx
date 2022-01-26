import React from 'react';
import { GeneratorSvgIcon } from '../../assets/GeneratorSvgIcon';
import s from './ListCities.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCity } from '../../store/actions';
//add data new Date or change func
export default function ListCities() {
  const dispatch = useDispatch();
  const store = useSelector((state)=> state.cities);
  
  return (
     <section className={s.wrapper}>

       {store !== null ? store.map(city => (
        <div className={s.city} key={city.name}>
        <span className={s.city__head_wrap}>
         <h6 className={s.name}>{city.name}</h6>
         <GeneratorSvgIcon className={s.city__close} id='close'/>
         <button onClick={()=> dispatch(deleteCity({name: city.name}))}>del</button>
        </span>
        <p className={s.date}>25.01.2022</p>
        <img className={s.city__img} src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="icon weather" />
        <p className={s.temp__max}>{Math.round(city.main.temp)}</p>
        <p className={s.temp__min}>{Math.round(city.main.temp_min)}</p>
        <p className={s.precipitation}>{city.weather[0].description}</p>
      </div>  
       )) : null}   

     </section>
  );
};