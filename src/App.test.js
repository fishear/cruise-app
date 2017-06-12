import React from 'react';
import ReactDOM from 'react-dom';
import CruiseApp from './containers/CruiseApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CruiseApp />, div);
});
