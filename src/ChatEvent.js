import React from 'react';
import STORE from './STORE.js';

export default function ChatEvent(props) {
  //use find to select the participant who the event relates to. store in variable.
  let currentParticipant = STORE.participants.find(participant => participant.id === props.participantId);

  if (props.type === 'message') {
    let messageTime = new Date(props.time).toTimeString();
    return (
      <div className='chat-event'>
        <img src={currentParticipant.avatar} alt="avatar"/>
        <div>
          <span className='message-participant-name'>{currentParticipant.name + ' '}</span> 
          <span className='timestamp'>{messageTime}</span>
        </div>
        <p className='chat-event-message'>{props.message}</p>
      </div>
    )
  } else {
    return (
      <div className='chat-event'>
        <span className='chat-event-participant-name'>{currentParticipant.name + ' '}</span>
        <span className='chat-event-descriptor'>{STORE.convertEventTypeToText[props.type]}</span>
      </div>
    )
  }
}