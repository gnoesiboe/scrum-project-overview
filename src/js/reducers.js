import * as redux from 'redux';
import columnReducer from './reducer/columnReducer';
import projectReducer from './reducer/projectReducer';
import lanesReducer from './reducer/lanesReducer';
import * as stateNamespace from './stateNamespace';

const reducers = redux.combineReducers({
    [stateNamespace.COLUMNS]: columnReducer,
    [stateNamespace.PROJECTS]: projectReducer,
    [stateNamespace.LANES]: lanesReducer
});

export default reducers;
