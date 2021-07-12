import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import ContactReducer from './redux/reducers/ContactReducer'
import { Provider } from 'react-redux'

const store = createStore(ContactReducer,composeWithDevTools())

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);



