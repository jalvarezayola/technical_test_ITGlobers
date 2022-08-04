import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import initStore from './store/store';

import App from './App';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <Provider store={initStore()}>
    <App />
  </Provider>
);
