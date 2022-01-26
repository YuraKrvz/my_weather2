import {useState} from 'react';
import useTheme from '../../hooks/useTheme';
import { useDispatch } from 'react-redux';
import { addCity } from '../../store/actions';
import { CurrentCountryByName } from '../../config';
import s from './Header.module.css';
import {GeneratorSvgIcon} from '../../assets/GeneratorSvgIcon.js';
import axios from 'axios';

export default function Header() {
  const dispatch = useDispatch(); 
  const [input, setInput] = useState(''); 
  const {theme, setTheme} = useTheme();

  const handlerSearch = () => {
     axios.get(CurrentCountryByName(input))
     .then(res => dispatch( addCity(res.data)) )
  }
  const handlerOnKeyEnter = (e) =>{
   if(e.key === 'enter'){
      alert(1)
   }
  }

  return (
   <header className={s.wrap__header}>
      <div className={s.inner}>
         <GeneratorSvgIcon className={s.logo__img} id='header-logo' />
         <h1 className={s.header__logo_text}>My weather v2</h1>
      </div>
      <input value={input} onChange={(e)=> setInput(e.target.value)} onKeyUp={} type="text" />
      <button onClick={handlerSearch} >search</button>
      <span onClick={()=> setTheme(!theme)} >
         <GeneratorSvgIcon className={s.logo__img} id='change-theme'/>
      </span>
   </header>
  );
}