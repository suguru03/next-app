import React, { useState } from 'react';

interface Props {
    message?: string;
  count?: number;
}

const App = (props: Props) => {
  const message = props.message || 'Hello?';
  const [count, setCount] = useState(props.count || 0);
  const increment = () => setCount(c => ++c);
  return (
    <div className="App">
      <p>{message}</p>
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default App;
