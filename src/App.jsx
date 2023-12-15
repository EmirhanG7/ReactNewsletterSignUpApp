import HeaderInfo from "./assets/components/HeaderInfo"
import { useState } from "react"
import Subscribe from "./assets/components/Subscribe"
import Subscribing from "./assets/components/Subscribing"

export default function App() {
  const [isFormSubmitted, setFormSubmit] = useState(false)
  const [email, setEmail] = useState("")
  
  return (
    <>
      <div className="container">
        {
          isFormSubmitted
          ?
          <Subscribing setFormSubmit={setFormSubmit} email={email} />
          :
          
            <div className="hero">
              <div className="header">
                <HeaderInfo />
                <Subscribe email={email} setEmail={setEmail} isFormSubmitted={isFormSubmitted} setFormSubmit={setFormSubmit}/>
              </div>
              <div className="bgImg">
                <img className="desktop" src="./src/assets/Img/mainPageImg.png" alt="Main Page Img" />
                <img className="mobile" src="./src/assets/Img/mainPageImgMobile.jpg" alt="Main Page Img" />
              </div>
            </div>
        }
      </div>
    </>
  )
}