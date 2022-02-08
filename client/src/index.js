import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux";
import {Provider} from "react-redux";

const rerenderDom = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>

        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderDom();

store.subscribe(() => {
    rerenderDom();
})


