import { types } from './types';
import { Dispatch } from 'redux';

let intervalId: number;

export const incrementCounterAsync = (): any => async (dispatch: Dispatch<any>) => {
    intervalId = window.setInterval(() => dispatch(incrementCounter()), 1000);
};

export const incrementCounter = () => {
    return {
        type: types.COUNTER_INCREMENT,
    };
};

export const decrementCounter = () => {
    clearInterval(intervalId);
    return {
        type: types.COUNTER_DECREMENT,
    };
};
