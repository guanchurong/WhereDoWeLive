import { createStore, applyMiddleware } from 'redux';
import thunkMidldeWare from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './root-reducer';

const loggerMiddleware = createLogger();
const createStoreWithMiddlewares = applyMiddleware(
  thunkMidldeWare,
  loggerMiddleware,
)(createStore);

const configureStore = (initialState = {}) => createStoreWithMiddlewares(rootReducer, initialState);

export default configureStore;
