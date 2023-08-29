import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
    <div className="content">


<div className="qrPhoto">
  <img src="/images/image-qr-code.png" alt="qrPhoto" width="100px" />
  </div>

<div className="mainText">
  <h3>Improve your front-end skills by building projects</h3>
</div>

<div className="paragraph">

  <p>Scan the QR code to visit Frontend Mentor and take your coding skills next level</p>
</div>

</div>


    </div>
    

  )
}

export default App
