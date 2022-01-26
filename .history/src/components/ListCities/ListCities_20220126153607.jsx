import React from 'react';
import { GeneratorSvgIcon } from '../../assets/GeneratorSvgIcon';
import { getDate } from '../../config';
import s from './ListCities.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCity } from '../../store/actions';
//add data new Date or change funcr
export default function ListCities() {
  const dispatch = useDispatch();
  const store = useSelector((state)=> state.cities);
  
  return (
     <section className={s.wrapper}>

       {store.map(city => (
        <div className={s.city} key={city.name}>
        <span className={s.city__head_wrap}>
         <h6 className={s.name}>{city.name}</h6>
         <GeneratorSvgIcon 
          className={s.city__close} 
          id='close'
          onClick={()=> dispatch(deleteCity({name: city.name}))}
         />
         <button onClick={()=> dispatch(deleteCity({name: city.name}))}>del</button>
        </span>
        <p className={s.date}>{getDate()}</p>
        <img className={s.city__img} src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="icon weather" />
        <p className={s.temp__max}>{Math.round(city.main.temp)}</p>
        <p className={s.temp__min}>{Math.round(city.main.temp_min)}</p>
        <p className={s.precipitation}>{city.weather[0].description}</p>
      </div>  
       ))}   

     </section>
  );
};