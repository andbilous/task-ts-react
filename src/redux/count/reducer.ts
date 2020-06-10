import { CounterActionTypes, counterState, types } from './types';

const initialState: counterState = {
    counter: 0,
};

export const counterReducer = (state: counterState = initialState, action: CounterActionTypes): counterState => {
    switch (action.type) {
        case types.COUNTER_INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case types.COUNTER_DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
};
