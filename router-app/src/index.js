import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardRouter from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><CardRouter /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
