import React from 'react';
import './ChatLog.css';
import ChatEvent from './ChatEvent.js'


export default function ChatLog(props){
    return (
      <div className='chat-log'>
        {props.ChatLog.map((chatEvent) =>
          <ChatEvent
            participantId = {chatEvent.participantId}
            type = {chatEvent.type}
            message = {chatEvent.message}
            time = {chatEvent.time}
            timestamp =  {chatEvent.timestamp}
            />
          )}
      </div>
    )
} 