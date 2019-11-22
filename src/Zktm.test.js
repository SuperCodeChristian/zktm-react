import React from 'react';
import ReactDOM from 'react-dom';
import Zktm from './Zktm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Zktm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
