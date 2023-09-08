import React from 'react'
import Input from './Input'
import Output from './Output'

const TempConverter = () => {
  const [temp, setTemp] = React.useState(null);
  const [scale, setScale] = React.useState("");
  const [tempConv, setTempConv] = React.useState(null);
  const [scaleConv, setScaleConv] = React.useState("");
  const [visible, setVisible] = React.useState(false);

  const handleCtoF = () => {
  console.log(temp)
    setTempConv(((+temp * (9/5)) + 32).toFixed(2))
    setScaleConv("F")
    setVisible(true)
  }

  const handleFtoC = () => {
    setTempConv(((+temp - 32) * 5/9).toFixed(2))
    setScaleConv("C")
    setVisible(true)
  }
// console.log(tempConv)
  return (
    <div>
      <Input setScale={setScale} scale={scale} setTemp={setTemp} handleCtoF={handleCtoF} handleFtoC={handleFtoC} setVisible={setVisible}/>
      <hr style={{width: "60%", margin:"auto", marginTop:"20px"}}/>
      {visible && temp && <Output tempConv={tempConv} scaleConv={scaleConv} temp={temp} scale={scale} visible={visible}/>}
    </div>
  )
}

export default TempConverter