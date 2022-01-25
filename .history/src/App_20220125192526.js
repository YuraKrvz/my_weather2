import Header from './components/Header/Header';
import MyWeather from './components/MyWeather/MyWeather';
import ListCities from './components/ListCities/ListCities';

export default function App() {
  
  return (
    <div className='container'>
      <Header />
      <MyWeather />
      <ListCities />
    </div>
  );
};
