import Immutable from 'immutable';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import config from 'config';
import rootReducer from 'redux/reducers/rootReducer';

export const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function createMiddlewares() {
  const middlewares = [thunkMiddleware];

  if (config.env === 'development' && typeof window !== 'undefined') {
    middlewares.push(
      createLogger({
        level: 'info',
        collapsed: true,
        stateTransformer: (state) => {
          const newState = {};

          for (const i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
              newState[i] = state[i].toJS();
            } else {
              newState[i] = state[i];
            }
          }

          return newState;
        },
      })
    );
  }

  return middlewares;
}

function immutableChildren(obj) {
  const state = {};
  Object.keys(obj).forEach((key) => {
    state[key] = Immutable.fromJS(obj[key]);
  });
  return state;
}

const middlewares = createMiddlewares();
const initialState = {};
const state = immutableChildren(initialState);

export function createStoreX(initialState, context) {
  const {isServer} = context;

  return createStore(persistedReducer, state, applyMiddleware(...middlewares));
}

export const store = createStore(
  persistedReducer,
  state,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);
