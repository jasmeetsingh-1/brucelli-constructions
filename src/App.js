import { useState } from 'react';
import './App.css';
import Home from './component/Home';
import Login from './component/page/login';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div>
      {
        isLoggedIn ? <Home setIsLoggedIn={setIsLoggedIn}/> :<Login setIsLoggedIn={setIsLoggedIn}/>
      }
    </div>
  );
}

export default App;
