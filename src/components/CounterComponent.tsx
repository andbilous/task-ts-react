import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { incrementCounter, decrementCounter, incrementCounterAsync } from '../redux/count/actions';

interface Props {
    counter: number;
    incrementCounter: Function;
    decrementCounter: Function;
    incrementCounterAsync: Function;
}

const Counter: React.FC<Props> = (props: Props) => {
    return (
        <Grid style={{ margin: '5rem' }} container spacing={3}>
            <Grid item style={{ transform: 'translateY(-20px)' }}>
                <h1>{props.counter}</h1>
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={(e: MouseEvent) => {
                        props.incrementCounter();
                    }}
                >
                    Add one
                </Button>
            </Grid>
            <Grid item>
                <Button
                    id="decrease"
                    variant="contained"
                    color="primary"
                    onClick={(e: MouseEvent) => {
                        props.decrementCounter();
                    }}
                >
                    Sub one
                </Button>
            </Grid>
            <Grid item>
                <Button
                    id="increase-async"
                    variant="contained"
                    color="primary"
                    onClick={(e: MouseEvent) => {
                        props.incrementCounterAsync();
                    }}
                >
                    Add One Async
                </Button>
            </Grid>
        </Grid>
    );
};

const CounterContainer = connect(
    (state: any) => ({
        counter: state.counterReducer.counter,
    }),
    (dispatch) => ({
        incrementCounter: () => dispatch(incrementCounter()),
        decrementCounter: () => dispatch(decrementCounter()),
        incrementCounterAsync: () => dispatch(incrementCounterAsync()),
    }),
)(Counter);

export { CounterContainer as Counter };
