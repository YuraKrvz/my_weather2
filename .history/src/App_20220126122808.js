import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header/Header';
import Weather from './components/Weather/Weather';

export default function App() {
  
  return (
    <Provider store={store}>
      <div className='container'>
        <Header />
        <Weather />
      </div>
    </Provider>
  );
};
