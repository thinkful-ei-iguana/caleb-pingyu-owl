import React from 'react';
import Participant from './Participant.js'
import ParticipantList from './ParticipantList.js'

export default function stage(props){
  let array = props.participantList.filter(prop => prop.onStage === true)
    console.log(array);
  let stageHtml = ""
  array.forEach(element => {
      
  });
  return (
    <div className='view'>
       <div className='user'>
        <h3 className='name'> </h3>
        <div className='avatar'> </div>
      </div>
    </div>
  )

}