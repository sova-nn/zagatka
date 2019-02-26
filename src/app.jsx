import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './css/header.css';
import './css/index.css';
import './css/main.css';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

ReactDom.render (
    <App />,
    document.getElementById('app')
);