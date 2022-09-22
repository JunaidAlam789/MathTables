import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Square } from './components';
//import { Square, Board } from './components';

ReactDOM.render(
<>

<scan className='square'>
<scan className='table'><Square  value={4} /></scan>
<scan className='table'><Square  value={5} /></scan>
<scan className='table'><Square  value={6} /></scan>
<scan className='table'><Square  value={7} /></scan>
<scan className='table'><Square  value={8} /></scan>
<scan className='table'><Square  value={9} /></scan>
</scan>

</>,
document.getElementById('app'));