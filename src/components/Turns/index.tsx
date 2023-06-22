import React from 'react'
import './index.scss'
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CloseIcon from '@mui/icons-material/Close';

export default function Turns() {
  return (
    <div className='turns_container'>
      <div className="user1">
        <span>User 1</span>
        <TripOriginIcon style={{ color: 'yellow', width: '8vw', height: '8vw', flex: 1 }} />
      </div>
      <div className="user2">
        <span>User 2</span>
        <CloseIcon style={{ color: 'red', width: '10vw', height: '10vw', flex: 1 }} />
      </div>
    </div>
  )
}
