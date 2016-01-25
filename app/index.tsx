/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../node_modules/rxjs-es/Rx.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore, applyMiddleware, compose } from 'redux';
import DevTools from './containers/Devtools';
import { Provider } from 'react-redux';
let createLogger = require('redux-logger');

import { App } from './components/app';
import { counterApp as rootReducer } from './reducers';

interface IHotModule {
  hot?: { accept: (path: string, callback: () => void) => void };
};

declare const module: IHotModule;

const finalCreateStore = compose(
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

function configureStore(): Store {
  const store = finalCreateStore(rootReducer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer: any = require('./reducers').counterApp;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store: Store = configureStore();

class Main extends React.Component<{}, {}> {
  public render(): React.ReactElement<Provider> {
    return (<Provider store={store}>
      <div>
        <App />
        <DevTools />
      </div>
    </Provider>);
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
