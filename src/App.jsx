
import './App.css'
import LeftBar from './components/LeftBar/LeftBar'
import {Login, SignUp, Home} from "./index"
import { BrowserRouter } from 'react-router-dom'

function App() {
  return(
    <>
     <BrowserRouter>
       {/* <Login /> */}
       <LeftBar />
       <main>
        <Home />
       </main>
     </BrowserRouter>
    </>
  )
}

export default App
