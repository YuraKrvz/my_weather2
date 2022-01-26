import {useState} from 'react';
import useTheme from '../../hooks/useTheme';
import { useDispatch } from 'react-redux';
import { addCity } from '../../store/actions';
import s from './Header.module.css';
import {GeneratorSvgIcon} from '../../assets/GeneratorSvgIcon.js';

export default function Header() {
  const dispatch = useDispatch(); 
  const [input, setInput] = useState(''); 
  const {theme, setTheme} = useTheme();

  const handlerSearch = () => {
   //dispatch( addCity( {name: input} ) )

  }

  return (
   <header className={s.wrap__header}>
      <div className={s.inner}>
         <GeneratorSvgIcon className={s.logo__img} id='header-logo' />
         <h1 className={s.header__logo_text}>My weather v2</h1>
      </div>
      <input value={input} onChange={(e)=> setInput(e.target.value)} onKeyUp={()=> console.log(input)} type="text" />
      <button onClick={handlerSearch} >search</button>
      <span onClick={()=> setTheme(!theme)} >
         <GeneratorSvgIcon className={s.logo__img} id='change-theme'/>
      </span>
   </header>
  );
}