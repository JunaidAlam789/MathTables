import logo from './logo.svg';
import './App.css';
import {Square, Board} from './components'

function App() {
  return (
    <div className="App">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <scan><Board className='board' value={4} /> </scan>
        <scan><Board className='board' value={5} /></scan>
        <scan><Board className='board' value={6} /></scan>
    </div>
  );
}

export default App;
