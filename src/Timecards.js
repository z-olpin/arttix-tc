import React, { useState, useEffect } from 'react'
import './Timecards.css'
import cc from "./cc.png"

const TimeCards = () => {
  const [infoVisible, setInfoVisible] = useState(false)
  const [inTime, setInTime] = useState()
  const [outTime, setOutTime] = useState()
  const [roundedDiff, setRoundedDiff] = useState()

  useEffect(() => {
    document.getElementById('in').value = '09:00'
    document.getElementById('out').value = '17:00'
  }, [])

  useEffect(() => {
    if (inTime >= 0 && outTime >= 0) {
      let diff = outTime - inTime
      let hours = Math.trunc(diff / 60)
      let remainingMins = diff % 60
      let quarterRoundedMin = Math.round(remainingMins / 15) * 25
      let stringHours = hours.toString()
      let stringMin = quarterRoundedMin.toString()
      if (diff < 0) {
        setRoundedDiff('invalid input')
      } else
        setRoundedDiff(`${stringHours}.${stringMin}`)
      }
    }, [inTime, outTime])

  const changeIn = time => {
    let [hour, min] = time.split(':')
    let totalInMin = (Number(hour) * 60) + Number(min)
    setInTime(totalInMin)
  }

  const changeOut = time => {
    let [hour, min] = time.split(':')
    let totalOutMin = (Number(hour) * 60) + Number(min)
    setOutTime(totalOutMin)
  }

  return (
    <>
      <header>
        <div onClick={() => infoVisible ? setInfoVisible(false) : setInfoVisible(true)} id="info">
          {infoVisible ? 'X' : 'info'}
        </div>
        {infoVisible &&
          <div id="info-display" style={{ visibility: infoVisible ? 'visible' : 'hidden' }}>
            This application was created for ArtTix. It calculates a shift's duration and rounds it to the nearest quarter-hour, per ArtTix reporting requirements.
          </div>}
      </header>
      <main>
        <table id="select-wrapper">
          <tbody>
          <tr>
            <td className='time-select'>
              <label>IN:</label>
              <input onMouseOver={() => {}} id="in" type="time" onChange={e => changeIn(e.target.value)}></input>
            </td>
          </tr>
          <tr>
            <td className='time-select'>
              <label>OUT:</label>
              <input id="out" type="time" onChange={e => changeOut(e.target.value)}></input>
            </td>
          </tr>
          </tbody>
        </table>
        <h2>Total hours: {roundedDiff}</h2>
      </main>
      <footer>
        <img id="cc" src={cc} width='48px' alt="CC license - Use freely"></img>Use freely.&nbsp;
        <a id="repo" href="http://github.com/vxxce/timecard-converter">Zachary Olpin</a>
      </footer>
    </>
  )
}

export default TimeCards
