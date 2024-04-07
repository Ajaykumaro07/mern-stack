import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
export default function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/about" element={ <About/> } />
    <Route path='/signIn' element= { <SignIn />} />
    <Route path='/signUp' element= { <SignUp />} />
    <Route path='/dashboard' element= { <Dashboard />} />

    </Routes>
    </BrowserRouter>
  )
}
