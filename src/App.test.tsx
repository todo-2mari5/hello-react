import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

test('renders learn crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});
