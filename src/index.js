import React from 'react';
import { render } from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <App />
  );
};

render (
  <Root />,
  document.getElementById('root')
);

registerServiceWorker();
