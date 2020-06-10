export interface counterState {
    counter: number;
}
export const types = {
    COUNTER_INCREMENT: 'COUNTER_INCREMENT',
    COUNTER_DECREMENT: 'COUNTER_DECREMENT',
    COUNTER_INCREMENT_ASYNC: 'COUNTER_INCREMENT_ASYNC',
};

interface CounterIncrementAction {
    type: typeof types.COUNTER_INCREMENT;
}

interface CounterDecrementAction {
    type: typeof types.COUNTER_DECREMENT;
}

interface CounterDecrementAsyncAction {
    type: typeof types.COUNTER_INCREMENT_ASYNC;
}

export type CounterActionTypes = CounterIncrementAction | CounterDecrementAction | CounterDecrementAsyncAction;
