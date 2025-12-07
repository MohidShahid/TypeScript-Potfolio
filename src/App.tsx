import Home from './Pages/Home'
import AllProjects from "./Pages/AllProjects"
import './App.css'
import { Routes, Route} from "react-router-dom"


function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/all-projects' element={<AllProjects/>} />
    </Routes>
  )
}

export default App
