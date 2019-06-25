import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import './styles/css/column-chart.css';
import './styles/css/pie-chart.css';
import './styles/css/heatMap-chart.css';
import './styles/css/consumption.css';
import './styles/css/header.css';
import './styles/css/navigation.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
