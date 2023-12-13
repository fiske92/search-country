import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return <div className={darkMode ? 'dark' : ''}>
    <div className='bg-white dark:bg-gray-700 min-h-[100vh]'>
      <Header darkModeProp={{darkMode, setDarkMode}} />
      <Body />
    </div>
  </div>
}

export default App;
