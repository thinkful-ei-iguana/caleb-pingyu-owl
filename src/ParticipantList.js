import React from 'react';
import Participant from './Participant.js'
import './ParticipantList.css';


export default function ParticipantList(props){
    return (
      <div className='list'>
        {props.participantList.map((participant) =>
          <Participant
            id = {participant.id}
            name = {participant.name}
            avatar = {participant.avatar}
            inSession = {participant.inSession}
            onStage =  {participant.onStage}
            />
          )}
      </div>
    )
} 