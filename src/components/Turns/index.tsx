import React, { useEffect } from 'react'
import './index.scss'

// Redux
import { useSelector } from 'react-redux/es/hooks/useSelector'

// MUI Icons
import TripOriginIcon from '@mui/icons-material/TripOrigin'
import CloseIcon from '@mui/icons-material/Close'

export default function Turns() {
  const turn = useSelector(state => state)

  return (
    <div className='turns_container'>
      <div className="user1" style={{ border: turn === 1 ? '2px solid white' : 'none' }}>
        <span>User 1</span>
        <TripOriginIcon style={{ color: 'yellow', width: '8vw', height: '8vw', flex: 1 }} />
      </div>
      <div className="user2" style={{ border: turn === 2 ? '2px solid white' : 'none' }}>
        <span>User 2</span>
        <CloseIcon style={{ color: 'red', width: '10vw', height: '10vw', flex: 1 }} />
      </div>
    </div>
  )
}
