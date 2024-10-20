import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [number, setNumber] = useState(0)
  return(
    <React.Fragment>
      <button onClick={() => setNumber(number + 2)}>Click</button>
      {
        <p>{number}</p>
      }
    </React.Fragment>
  )
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)