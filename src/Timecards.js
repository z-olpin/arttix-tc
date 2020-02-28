import React, { useState, useEffect } from 'react'
import './Timecards.css'
import cc from "./cc.png"
import brackets from "./brackets.png";

const TimeCards = () => {
  const [inTime, setInTime] = useState()
  const [outTime, setOutTime] = useState()
  const [roundedDiff, setRoundedDiff] = useState()
  const [menuVisible, setMenuVisible] = useState(false)

  useEffect(() => {
    document.getElementById('in').value = "09:32"
    document.getElementById('out').value = "14:56"
    setInTime(572)
    setOutTime(896)
  }, [])

  useEffect(() => {
    if (inTime >= 0 && outTime >= 0) {
      let diff = outTime - inTime
      let hours = Math.trunc(diff / 60)
      let remainingMins = diff % 60
      let quarterRoundedMin = Math.round(remainingMins / 15) * 25
      if (quarterRoundedMin === 100) {
        quarterRoundedMin = 0
        hours += 1
      }
      let stringHours = hours.toString()
      let stringMin = quarterRoundedMin.toString()
      let stringTime = stringHours + '.' + stringMin
      if (stringTime[stringTime.length-1] === '0') {
        stringTime = stringTime.slice(0,stringTime.length-1)
        if (stringTime[stringTime.length-1] === '.') {
          stringTime = stringTime.slice(0,stringTime.length-1)
        }
      }
      if (diff < 0) {
        setRoundedDiff('?')
      } else
        setRoundedDiff(stringTime)
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

  const toggleInfo = e => {
    e.preventDefault()
    menuVisible
      ? e.target.parentElement.parentElement.style.transform = "translate3d(-100vw, 0, 0)"
      : e.target.previousSibling.style.transform = "translate3d(0vw, 0, 0)";
     setMenuVisible(!menuVisible) 
  }

  return (
    <>
      <header>
        <div id="infoPane">
          <div><div id="hideInfo" onClick={e => toggleInfo(e)}></div></div>
          <p>
            This application was created for ArtTix.
            It calculates a shift's duration and rounds it to the nearest quarter-hour,
            per ArtTix reporting requirements.
          </p>
          <p>
            <a href="https://vxxce.github.io/">Github</a>
            <a href="mailto:info@zacharyolp.in">Contact</a>
          </p>
        </div>
        <div id="info" onClick={e => toggleInfo(e)}>INFO</div>
      </header>
      <main>
        <div id="time-wrapper">
          <label>IN:</label>
          <input id="in" type="time" onChange={e => changeIn(e.target.value)}></input>
          <label>OUT:</label>
          <input id="out" type="time" onChange={e => changeOut(e.target.value)}></input>
        <img id="sum" src={brackets} alt="bracket"></img>
        <p id="total">{roundedDiff}</p>
        </div>
      </main>
      <footer>
        <a href="https://creativecommons.org/licenses/by/4.0/"><img id="cc" src={cc} alt="CC BY license - Use freely"></img></a>
        <a id="repo" href="http://github.com/vxxce/timecard-converter">Zachary Olpin</a>
      </footer>
    </>
  )
}

export default TimeCards
