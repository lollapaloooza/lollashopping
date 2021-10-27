import {createStore, compose} from "redux";
import {persistStore} from "redux-persist";
import rootReducer from './root-reducer';

let composeEnhancers = '';

if(process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(rootReducer, composeEnhancers);
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor};