import React from 'react';
import useTheme from '../../hooks/useTheme';
import s from './Header.module.css';
import GeneratorSvgIcon from '../../assets/GeneratorSvgIcon';

export default function Header() {
  const {theme, setTheme} = useTheme();

  return (
   <header className={s.wrap__header}>
      <div>

         <img className={s.logo__img} src="" alt="logo image" />
         <h1 className={s.header__logo_text}>My weather</h1>
      </div>
      <button onClick={()=> setTheme(!theme)}>change theme</button>
   </header>
  );
}
