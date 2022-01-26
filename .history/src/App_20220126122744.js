import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';

export default function App() {
  
  return (
    <Provider>
      <div className='container'>
        <Header />
        <Weather />
      </div>
    </Provider>
  );
};
