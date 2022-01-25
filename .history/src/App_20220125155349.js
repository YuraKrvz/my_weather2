import s from './app.module.css';

import useTheme from './hooks/useTheme';

export default function App() {
  const {theme, setTheme} = useTheme();
  
  return (
    <div className={s.app}>
     <header>HEADER</header>

     <ul className={s.class__ul}>
      <li className={s.class__li}>****</li>
      <li>****</li>
      <li>****</li>
      <li>****</li>
      <li>****</li>
     </ul>

     <hr />

     <button>Click</button>

    </div>
  );
};
