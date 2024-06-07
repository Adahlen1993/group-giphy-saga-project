import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import { Provider } from 'react-redux';
import store from './components/redux/store.js';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
import 'bootstrap/dist/css/bootstrap.css';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <App />
    </Provider>
);
