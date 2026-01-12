
import './App.css'
import LeftBar from './components/LeftBar/LeftBar'
import Login from './components/LogIn/Login'
import SignUp from './components/SignUp/SignUp'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return(
    <>
     <BrowserRouter>
       {/* <Login /> */}
       <LeftBar />
     </BrowserRouter>
    </>
  )
}

export default App
