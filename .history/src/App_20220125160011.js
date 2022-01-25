import s from './app.module.css';

import useTheme from './hooks/useTheme';

export default function App() {
  const {theme, setTheme} = useTheme();
  
  return (
    <div className={s.app}>
     <header>HEADER</header>

     <ul className={s.class__ul}>
      <li className={s.class__li}>****</li>
      <li>***12312*</li>
      <li>***aasdasd*</li>
      <li>**sadasda**</li>
      <li>**adsdasd**</li>
     </ul>

     <hr />

     <button onClick={()=> setTheme(!theme)}>Click</button>
     <button onClick={()=> setTheme('dark')}>Click</button>

    </div>
  );
};
