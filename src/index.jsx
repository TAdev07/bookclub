import React from 'react';
import {render} from 'react-dom';
import MainContainer from './layout/Main';

const rootElement = document.getElementById('react-app');

render(<MainContainer />, rootElement);