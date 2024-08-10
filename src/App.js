import './App.css';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Function to display an alert
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };

  // Function to clear the alert
  const clearAlert = () => {
    setAlert(null);
  };

  // Function to toggle between light and dark modes
  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Light Mode has been enabled', 'Success');
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#0a1f39';
      showalert('Dark Mode has been enabled', 'Success');
    }
  };

  return (
    <>
      <Navbar title="TextTransform" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} clearAlert={clearAlert} />
      <div className="container">
        <Textform heading="Enter your text" mode={mode} />
      </div>
    </>
  );
}

export default App;
