import './App.css';
import Alert from './components/Alert';
import Navbar from "./components/Navbar"
import Textform from "./components/Textform"
import About from "./components/About"
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  };
  const togglemode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showalert('Light Mode has been enabled', 'Success')
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#0a1f39'
      showalert('Dark Mode has been enabled', 'Success')
    }
  };
  return (
    <>
      <Navbar title="TextTransform" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}></Alert>
      <div className="container">
        <Textform heading="Enter your text" mode={mode} />
      </div>
    </>
  );
}

export default App;
