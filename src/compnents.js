//import { render } from '@testing-library/react'
import React from 'react'
//import ReactDOM from 'react-dom'

export  function Square(props){
    var a = [1,2,3,4,5,6,7,8,9,10];
        
    const moves = a.map((move)=>{return(<h1>{props.value}x{move}={move*props.value}</h1>);});
          return (moves);
        
    }
                
      


export class  Board extends React.Component{
     /* constructor(props){
     super(props)
    // this.state={table: this.props.value };
    }  */
    
    renderSquare(i) {
        return (<scan>
        <Square value={i} className='square' />
        </scan>
        );
      }
    render()
        {
    return ( this.renderSquare(this.props.value)  );
    }
    }

