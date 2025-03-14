
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Accueil from "./pages/Accueil/Accueil"
import Medecin from "./pages/Medecin/Medecin"
import Rv from "./pages/Rv/Rv"
import Patient from "./pages/Patient/Patient" 
import SignUp from './composants/SignUp/SignUp'
import Login from './composants/Login/Login'

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Medecin />} />
        <Route path="/medecin" element={<Medecin />} />
        <Route path="/rv" element={<Rv />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
