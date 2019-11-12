import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import STORE from './STORE.js';
import ParticipantList from './ParticipantList.js';
import Stage from './Stage.js';

ReactDOM.render( <Stage participantList = { STORE.participants }
        />, document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();