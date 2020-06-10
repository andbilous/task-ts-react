import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Counter } from './components/CounterComponent';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Counter />
            </div>
        </Provider>
    );
}

export default App;
