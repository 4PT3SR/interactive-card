import { useState } from "react"
import { CardContext,initialState} from "./context/CardContext"
import {ValidityContext} from './context/ValidityContext'
import LeftPane from "./components/LeftPane"
import RightPane from "./components/RightPane"
import { cardDetails } from "./types"



const App = () => {
  const [validated, setValidated] = useState<boolean>(false) //checks if card is validated

  const [card, setCard] = useState<cardDetails>(initialState) //content of the card which is showed on the frontcard component
  
  return (
    <CardContext.Provider value={{ card , setCard}}>
     <ValidityContext.Provider value={{validated,setValidated}}>
    <div className="w-full h-full  flex flex-col md:flex-row font-grotesk">
    <LeftPane></LeftPane>
    <RightPane></RightPane>
    </div>
    </ValidityContext.Provider>
    </CardContext.Provider>
  )
}

export default App