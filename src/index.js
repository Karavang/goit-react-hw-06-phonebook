import React from 'react';
import ReactDOM from 'react-dom/client';
import Phonebook from 'components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Phonebook />
    </Provider>
  </React.StrictMode>
);
