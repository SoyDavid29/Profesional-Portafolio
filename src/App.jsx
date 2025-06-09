import Profile from "./Components/Profile"
import Sidebar from "./Components/Sidebar"
import Target from "./Components/Target"
import { useState } from "react"

function App() {


  return (
    <>
     <Sidebar/>
     <Profile/>
     <Target/>

     <h1 className="magic-text" >My magic</h1>

    </>
  )
}

export default App
