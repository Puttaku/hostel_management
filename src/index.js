import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import { createStore } from 'redux'
import rootReducer from './Redux/Reducer'

const store = createStore(rootReducer)
const RoutePath = () =>(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<RoutePath />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
