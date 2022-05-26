import './app.scss';

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="App">
      <h1 className="title">{count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default App;
