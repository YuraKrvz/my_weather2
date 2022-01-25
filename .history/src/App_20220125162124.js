import useTheme from './hooks/useTheme';
import Header from './components/header/Header';

export default function App() {
  const {theme, setTheme} = useTheme();
  
  return (
    <div className={s.app}>
     <Header />

     <hr />

     <button onClick={()=> setTheme(!theme)}>Click</button>
     <button onClick={()=> setTheme('dark')}>Click</button>

    </div>
  );
};
