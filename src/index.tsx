import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { compose, createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import './styles/app.scss';
import { IStoreState } from './types';
import { loadState, saveState } from './util/localStorage';
import throttle from './util/throttle';

const persistedState: any = loadState();
if (persistedState) {
  persistedState.visibilityFilter = null;
}
const store = createStore<IStoreState>(rootReducer, persistedState);
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
