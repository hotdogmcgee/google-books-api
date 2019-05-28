import React from 'react';
import ReactDOM from 'react-dom';
import BookType from './BookType';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookType />, div);
  ReactDOM.unmountComponentAtNode(div);
});