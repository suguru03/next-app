import 'isomorphic-fetch';
import React from 'react';

import App from '../src/App';

interface Props {
  message?: string;
}

export default class extends React.Component<Props> {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3001');
    const data = await res.json();
    return { message: data.message };
  }

  render() {
    return <App message={this.props.message} />;
  }
}
