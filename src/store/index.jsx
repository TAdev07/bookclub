import 'regenerator-runtime/runtime';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer as Home} from './../modules/Home/reducer';

import rootSaga from './../middleware';

const appReducer = combineReducers({
    Home
});

let store = null;
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =  typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({
        trace: true,
        traceLimit: 25
    }) : compose;

store = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
