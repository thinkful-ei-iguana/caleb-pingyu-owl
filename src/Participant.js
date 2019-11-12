import React from 'react';

export default function participants(props) {
  
  let statusIndicator = 'status dot ';
  if (props.inSession) {
    statusIndicator += 'green';
  } else {
    statusIndicator += 'grey';
  }
  console.log(statusIndicator);

  let statusMessage = '';
  if (props.inSession && props.onStage) {
    statusMessage = 'on stage';
  } 
  else if (props.inSession && !props.onStage) {
    statusMessage = 'in session';
  } 
  else {
    statusMessage = 'left session';
  }
  console.log(statusMessage);


  return (
    <div className='participants'>
        <img className='user-avatar' src={props.avatar} alt="user avatar"/>
        <div className='info'>
            <h6 className="name">{props.name}</h6>
            <div className={statusIndicator}>{statusMessage}</div>
        </div>
    </div>
  )
}