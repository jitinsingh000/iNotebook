import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import NoPage from './components/NoPage';
import SignUp from './components/SignUp';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import { useState } from "react";

/* 🔒 Protected Route */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<Layout />}>

            {/* Protected Home */}
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home showAlert={showAlert} />
                </ProtectedRoute>
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login showAlert={showAlert} />} />
            <Route path="/signup" element={<SignUp showAlert={showAlert} />} />
            <Route path="/*" element={<NoPage />} />

          </Route>
        </Routes>
      </Router>
    </NoteState>
  );
}

export default App;