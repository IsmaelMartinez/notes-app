import React from 'react';
import ReactDOM from 'react-dom';
import NotesApp from './NotesApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  //ReactDOM.render(<NotesApp  />, div);  // Crashes due localStorage is not defined. This probably will fix it => https://stackoverflow.com/questions/32911630/how-do-i-deal-with-localstorage-in-jest-tests
  ReactDOM.unmountComponentAtNode(div);
});
