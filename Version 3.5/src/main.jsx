import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import './index.module.css'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './redux/reducers/index';
import ThemeToggle from './App';
// import ThemeToggle from './theme';

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <ThemeToggle> */}
        <Provider store={store}>
            <ThemeToggle />
            {/* <App /> */}
        </Provider>,
        {/* </ThemeToggle> */}
    </React.StrictMode>,
)



