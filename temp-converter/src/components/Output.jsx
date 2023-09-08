import React from 'react'

const Output = ({temp, scale, tempConv, scaleConv}) => {
  return (
    <div>
        <h2>{`${temp}°${scale} is equal to ${tempConv}°${scaleConv}`}</h2>
    </div>
  )
}

export default Output