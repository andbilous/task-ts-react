import { combineReducers } from 'redux';
import { counterReducer } from './count/reducer';

export const rootReducer = combineReducers({
    counterReducer,
});
