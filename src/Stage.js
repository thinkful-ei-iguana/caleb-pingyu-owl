import React from 'react';
import Participant from './Participant.js'
import ParticipantList from './ParticipantList.js'

export default function stage(props){
  let onStageParticipants = props.participantList.filter(prop => prop.onStage === true)

  return (
    <div className='view'>
      {onStageParticipants.map(function(participant) {
        return (
        <div className='user'>
        <h3 className='name'>{participant.name}</h3>
        <img className='avatar' src={participant.avatar} alt="avatar"/> 
        </div>
        )      
    })}
    </div>
  )
}