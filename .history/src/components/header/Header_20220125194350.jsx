import React from 'react';
import useTheme from '../../hooks/useTheme';
import s from './Header.module.css';
import {GeneratorSvgIcon} from '../../assets/GeneratorSvgIcon.js';

export default function Header() {
  const {theme, setTheme} = useTheme();

  return (
   <header className={s.wrap__header}>
      <div className={s.inner}>
         <GeneratorSvgIcon className={s.logo__img} id='header-logo' />
         <h1 className={s.header__logo_text}>My weather v2</h1>
      </div>
      <span onClick={()=> setTheme(!theme)} >
         <GeneratorSvgIcon className={s.logo__img} id='change-theme'/>
      </span>
   </header>
  );
}