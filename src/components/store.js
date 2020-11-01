import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const compoaseEnhancers = compose;
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
const store = createStore(reducers, compoaseEnhancers(applyMiddleware(thunk)));

export default store;
