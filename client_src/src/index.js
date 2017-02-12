import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

// Components
import AppContainer from './components/AppContainer';
import Inventory from './components/3_Inventory/Inventory';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>

    <AppContainer>

      <Inventory />

    </AppContainer>

  </Provider>,
  document.getElementById('root')
);


