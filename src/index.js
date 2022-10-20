import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Table, TableForm} from './components';
//import { Square, Board, AddForm } from './components';

ReactDOM.render(
<>
{/* <scan className='table'><Table  value={5} /></scan>
<scan className='table'><Square  value={5} /></scan> */}
<div>
<TableForm value={5}/>

</div>




</>,
document.getElementById('app'));
/* 
{<scan className='square'> </scan>}
<scan className='table'><Square  value={4} /></scan>
<scan className='table'><Square  value={5} /></scan>
<scan className='table'><Square  value={6} /></scan>
<scan className='table'><Square  value={7} /></scan>
<scan className='table'><Square  value={8} /></scan>
<scan className='table'><Square  value={9} /></scan>  */