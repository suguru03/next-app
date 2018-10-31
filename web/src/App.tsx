import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import { createStyled } from './util';

interface Props {
  message?: string;
  count?: number;
}

const App = (props: Props) => {
  const message = props.message || 'Hello?';
  const [count, setCount] = useState(props.count || 1000);
  const increment = () => setCount(c => ++c);
  return (
    <Styled>
      {({ classes }) => (
        <div className="App">
          <p>{message}</p>
          <Button className={classes.button} onClick={increment}>
            {count}
          </Button>
        </div>
      )}
    </Styled>
  );
};

const Styled = createStyled({
  button: {
    backgroundColor: 'red',
  },
});

export default App;
