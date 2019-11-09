import React, {useState} from 'react'

// TODO: Use only minutes.
// Fix bug adding 12 hours to  12pm.

const TimeCards = () => {
const [inHour, setInHour] = useState()
const [inMin, setInMin] = useState()  
const [outHour, setOutHour] = useState()
const [outMin, setOutMin] = useState()  
const [total, setTotal] = useState()

const inHourChange = e => {
  const iH = e.target.value
  setInHour(iH)

}

const inMinChange = e => {
  const iM = e.target.value
  setInMin(iM)
}

const outHourChange = e => {
 const oH = e.target.value
 setOutHour(oH)
}

const outMinChange = e => {
const oM = e.target.value
setOutMin(oM)

// TODO: subtract or add minutes, shape to quartiles.
setTotal(outHour - inHour)


}



  return (
    <>
    <h1>Time in:</h1>
      <select onChange={inHourChange}>

        {[
          '5a', '6a', '7a', '8a',
          '9a', '10a', '11a', '12p',
          '1p', '2p', '3p', '4p',
          '5p', '6p', '7p', '8p',
          '9p', '10p'
          ].map(h => <option value={(h[h.length-1] === 'p') ? Number(h.slice(0,h.length-1))+12 : Number(h.slice(0,h.length-1))}>{h + 'm'}</option>)}

      </select>
      <select onChange={inMinChange}>
        {[
          '00', '01', '02', '03', '04',
          '05', '06', '07', '08', '09',
          '10', '11', '12', '13', '14',
          '15', '16', '17', '18', '19',
          '20', '21', '22', '23', '24',
          '25', '26', '27', '28', '29',
          '30', '31', '32', '33', '34',
          '35', '36', '37', '38', '39',
          '40', '41', '42', '43', '44',
          '45', '46', '47', '48', '49',
          '50', '51', '52', '53', '54',
          '55', '56', '57', '58', '59'
        ].map(m => <option value={Number(m)}>{m}</option>)}

      </select>

      <h1>Time out:</h1>

      <select onChange={outHourChange}>

        {[
          '5a', '6a', '7a', '8a',
          '9a', '10a', '11a', '12p',
          '1p', '2p', '3p', '4p',
          '5p', '6p', '7p', '8p',
          '9p', '10p'
          ].map(h => <option value={(h[h.length-1] === 'p') ? Number(h.slice(0,h.length-1))+ 12 : Number(h.slice(0,h.length-1))}>{h + 'm'}</option>)}

      </select>
      <select onChange={outMinChange}>
        {[
          '00', '01', '02', '03', '04',
          '05', '06', '07', '08', '09',
          '10', '11', '12', '13', '14',
          '15', '16', '17', '18', '19',
          '20', '21', '22', '23', '24',
          '25', '26', '27', '28', '29',
          '30', '31', '32', '33', '34',
          '35', '36', '37', '38', '39',
          '40', '41', '42', '43', '44',
          '45', '46', '47', '48', '49',
          '50', '51', '52', '53', '54',
          '55', '56', '57', '58', '59'
        ].map(m => <option value={Number(m)}>{m}</option>)}

      </select>

      
      {total &&
              <h1>Just the hour diff: {total}</h1>}
    </>
  )
}

export default TimeCards;
