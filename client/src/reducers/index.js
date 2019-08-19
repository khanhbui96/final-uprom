import {combineReducers} from 'redux';
import collections from './collections.reducer';
import pays from './pays.reducer'

const appReducer = combineReducers({
    collections,
    pays
});

export default appReducer