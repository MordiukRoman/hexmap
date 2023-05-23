import './App.css';
import { useState } from 'react';
import HexMap from './HexMap/HexMap';
import hexArrayMock from './hexArrayMock';

function App() {
  const [hexArray, setHexArray] = useState(hexArrayMock);
  const [temp, setTemp] = useState(null);
  const onSubmit = () => {
    //validate;
    // is 2 dimentional, === [[]], consist of only numbers
    setHexArray(temp);
  };
  return (
    <div className="App">
      <form action="">
        <input type="text" value={temp} onChange={(e) => setTemp(e.target.value)} />
        <button type="submit" onSubmit={onSubmit}>
          submit array
        </button>
      </form>
      <HexMap hexArray={hexArray}></HexMap>
    </div>
  );
}

export default App;
