import React, { useState, useEffect } from 'react'
import './Timecards.css'
import cc from "./cc.png";

// TODO: Use only minutes.
// Fix bug adding 12 hours to  12pm.

const TimeCards = () => {
  const [inHour, setInHour] = useState(null)
  const [inMin, setInMin] = useState(null)
  const [outHour, setOutHour] = useState(null)
  const [outMin, setOutMin] = useState(null)
  const [timeIn, setTimeIn] = useState(null)
  const [timeOut, setTimeOut] = useState(null)
  const [diff, setDiff] = useState(0)

  useEffect(() => {
    setTimeIn(inHour + inMin)
  }, [inHour, inMin])

  useEffect(() => {
    setTimeOut(outHour + outMin)
  }, [outHour, outMin])

  useEffect(() => {
    let _diff = timeOut - timeIn
    let diffHours = Math.trunc(_diff / 60)
    let diffMinutes = _diff % 60
    let diffQuartile = Math.round(diffMinutes / 15) * 25
    setDiff(Number(`${diffHours}.${diffQuartile}`))
  }, [timeIn, timeOut])

  return (
    <>
      <main>
        <div id="select-wrapper">
        <div className="time-select">
          <label>IN</label>
          <select onChange={e => setInHour(Number(e.target.value))}>
            {[
              ['6', 360], ['7', 420],
              ['8', 480], ['9', 540],
              ['10', 600], ['11', 660],
              ['12', 720], ['1', 780],
              ['2', 840], ['3', 900],
              ['4', 960], ['5', 1020],
              ['6', 1080], ['7', 1140],
              ['8', 1200], ['9', 1260]
            ].map(h => <option value={h[1]}>{h[0]}</option>)}

          </select>
          :
          <select onChange={e => setInMin(Number(e.target.value))}>
            {[
              0, 1, 2, 3, 4, 5, 6,
              7, 8, 9, 10, 11, 12, 13,
              14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25, 26, 27,
              28, 29, 30, 31, 32, 33, 34,
              35, 36, 37, 38, 39, 40, 41,
              42, 43, 44, 45, 46, 47, 48,
              49, 50, 51, 52, 53, 54, 55,
              56, 57, 58, 59
            ].map(m => <option value={m}>{m.toString().padStart(2, 0)}</option>)}

          </select>
        </div>
        <div className="time-select">
          <label>OUT</label>
          <select onChange={e => setOutHour(Number(e.target.value))}>
            {[
              ['6', 360], ['7', 420],
              ['8', 480], ['9', 540],
              ['10', 600], ['11', 660],
              ['12', 720], ['1', 780],
              ['2', 840], ['3', 900],
              ['4', 960], ['5', 1020],
              ['6', 1080], ['7', 1140],
              ['8', 1200], ['9', 1260],
              ['10', 1320]
            ].map(h => <option value={h[1]}>{h[0]}</option>)}

          </select>
          :
          <select onChange={e => setOutMin(Number(e.target.value))}>
            {[
              0, 1, 2, 3, 4, 5, 6,
              7, 8, 9, 10, 11, 12, 13,
              14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25, 26, 27,
              28, 29, 30, 31, 32, 33, 34,
              35, 36, 37, 38, 39, 40, 41,
              42, 43, 44, 45, 46, 47, 48,
              49, 50, 51, 52, 53, 54, 55,
              56, 57, 58, 59
            ].map(m => <option value={m}>{m.toString().padStart(2, 0)}</option>)}

          </select>
        </div>
        </div>

        <h2>Total hours: {diff}</h2>
      </main>
      <footer>
        <img id="cc" src={cc} width='48px' alt="CC license"></img>
        <a id="repo" href="http://github.com/vxxce/timecard-converter">Zachary Olpin</a>
       </footer>
    </>
  )
}

export default TimeCards;
