import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Heading from './components/Heading';
import './styles/app.scss';

ReactDOM.render(
  <Heading title="Hello World" />,
  document.getElementById('app')
);
