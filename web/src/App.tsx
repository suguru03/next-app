import React, { useState } from 'react';

interface Props {
  id?: string;
  count?: number;
}

const App = (props: Props) => {
  const id = props.id || '';
  const [count, setCount] = useState(props.count || 0);
  const increment = () => setCount(c => ++c);
  return (
    <div className="App">
      <p>{id}</p>
      <button onClick={increment}>{count}</button>
    </div>
  );
};

export default App;
