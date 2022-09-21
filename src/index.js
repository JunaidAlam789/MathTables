import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Square, Board } from './compnents';


ReactDOM.render(
<>
<scan><Board className='board' value={4} /> </scan>
<scan><Board className='board' value={5} /></scan>
<scan><Board className='board' value={6} /></scan>
</>,
document.getElementById('app'));