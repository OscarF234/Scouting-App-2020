import { useState } from 'react';
import './App.css';
import MainScene from './Scenes/Main/Main.js'

function App() {
  const [Scene, setScene] = useState("Main");

  const wrapper = {
    Scene, setScene
  }
  
  return (
    <MainScene wrapper={wrapper}/>
  );
}

export default App;