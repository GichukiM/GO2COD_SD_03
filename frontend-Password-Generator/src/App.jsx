import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import LogIn from "./pages/logIn.jsx"
import SignUp from "./pages/signUp.jsx";
import ResetPassword from './pages/reset-password.jsx';
import Welcome from './pages/welcome-home.jsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/welcome-home" element={<Welcome />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
    </Router>
  );
}

export default App;
