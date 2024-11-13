import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MapboxLocationPicker from 'Mapbox';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MapboxLocationPicker />
    </>
  );
}

export default App;
