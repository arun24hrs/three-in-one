import React from 'react'

const Input = ({setScale, setTemp, handleCtoF, handleFtoC, scale, setVisible}) => {

    const handleTempInput = (e) => {
        setTemp(e.target.value)
    }

    const handleScale = (e) => {
        setScale(e.target.value)
        setVisible(false)
    }

  return (
    <div style={{textAlign:"center",margin: "auto"}}>
        <div className='inputContainer'>
        <input type='number' placeholder='Enter temperature' onChange={(e)=>handleTempInput(e)}/>
        <select onChange={(e)=>handleScale(e)}>
            <option value="">Select Scale</option>
            <option value="C">Celsius</option>
            <option value="F">Fahrenheit</option>
        </select>
        </div>
        <div className='btnContainer'>
            <button disabled={scale=="" || scale=="C"} onClick={handleFtoC}>Convert to Celsius</button>
            <button disabled={scale=="" || scale=="F"} onClick={handleCtoF}>Convert to Fahrenheit</button>
        </div>
    </div>
  )
}

export default Input