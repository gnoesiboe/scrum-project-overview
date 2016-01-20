import * as redux from 'redux';
import reducers from './reducers';
import createLogger from 'redux-logger';
import thunkMiddelware from 'redux-thunk';
import persistStateMiddleware from './middleware/persistStateMiddleware';
import * as stateRepository from './repository/stateRepository';

var loggerMiddelware = createLogger();

var storeWithMiddelwareFactory = redux.applyMiddleware(
    persistStateMiddleware,
    thunkMiddelware,
    loggerMiddelware
)(redux.createStore);

var persistedState = stateRepository.getAll(),
    store = storeWithMiddelwareFactory(reducers, persistedState || undefined);

export default store;
