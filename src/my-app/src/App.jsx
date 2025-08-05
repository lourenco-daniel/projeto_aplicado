import './App.css'
import './pages/PartType.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PartType from './pages/PartType.jsx'
import SubmitList from './pages/SubmitList.jsx'

function App() {
  return(  
    <>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<PartType />} />
          <Route path="submitlist" element={<SubmitList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
