import React from 'react';

export default function Header() {
  return (
   <header className={s.wrap__header}>
      <div>
         <img className={s.logo__img} src="" alt="logo image" />
         <h1 className={s.header__logo_text}></h1>
      </div>
      <button className={s.button__theme}> theme </button>
   </header>
  );
}
