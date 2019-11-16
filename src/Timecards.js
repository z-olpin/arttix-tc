import React, { useState, useEffect } from 'react'
import './Timecards.css'
import cc from "./cc.png"

const TimeCards = () => {
  const [infoVisible, setInfoVisible] = useState(false)
  const [inTime, setInTime] = useState()
  const [outTime, setOutTime] = useState()
  const [roundedDiff, setRoundedDiff] = useState()

  return (
    <>
      <header>
        <div>
          {infoVisible
            ? <div id="x" onClick={() => setInfoVisible(false)}>X </div>
            : <div id="info" onClick={() => setInfoVisible(true)}>info</div>}
        </div>
        {infoVisible &&
          <div id="info-display" style={{ visibility: infoVisible ? 'visible' : 'hidden' }}>
            This application was created for ArtTix. It calculates a shift's duration and rounds it to the nearest quarter-hour, per ArtTix reporting requirements.
          </div>}
      </header>
      <main>
        <p style={{width: '50vw', margin: '32vh auto' }}>Heyo, sorry, this web-app had a bug. I'm fixing it now and will republish soon.</p>
      </main>
      <footer>
        <img id="cc" src={cc} width='48px' alt="CC license - Use freely"></img>Use freely.&nbsp;
        <a id="repo" href="http://github.com/vxxce/timecard-converter">Zachary Olpin</a>
      </footer>
    </>
  )
}

export default TimeCards
