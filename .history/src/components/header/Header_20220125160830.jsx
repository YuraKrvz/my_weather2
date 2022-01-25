import React from 'react';

export default function Header() {
  return (
   <header className={s.wrap__header}>
      <img className={s.logo__img} src="" alt="logo image" />
      <button className={s.button__theme}> theme </button>
   </header>
  );
}
