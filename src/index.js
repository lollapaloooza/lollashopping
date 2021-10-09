import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

import App from './App';
import './index.css';

const Application = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    <Application/>,
  document.getElementById('root')
);
