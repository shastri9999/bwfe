import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import Heading from './components/Heading';
import { IStoreState } from './types';
import './styles/app.scss';

const store = createStore<IStoreState>(rootReducer);

const app = (
  <Provider store={store}>
    <Heading title="Hello World" />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
