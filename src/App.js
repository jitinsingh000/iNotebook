import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
      setAlert({
          message: message,
          type: type
      });
      setInterval(() => {
          setAlert(null);
      }, 2500);
  }
  return (
    <>
      <NoteState>
        <Router>
        <Navbar />
          <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home showAlert={showAlert}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login showAlert={showAlert}/>} />
              <Route path="/signup" element={<SignUp showAlert={showAlert}/>} />
              <Route path="/*" element={<NoPage />} />
            </Route>
          </Routes>
        </Router>
      </NoteState>
      {/* <NoteState>
        <Router>
          <Navbar />
          <Alert message="some alert message" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Router>
      </NoteState> */}

    </>
  );
}

export default App;
