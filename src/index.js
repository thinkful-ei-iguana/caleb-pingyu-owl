import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import STORE from './STORE.js';
import ParticipantList from './ParticipantList.js';
import Stage from './Stage.js';
import ChatLog from './ChatLog.js';

ReactDOM.render( <ChatLog ChatLog = { STORE.chatEvents }
        />, document.getElementById('root'));

        //To use for stage ->  <Stage participantList = { STORE.participants }/>
        //To use for ParticipantList ->  <ParticipantList participantList = { STORE.participants }/>


        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();