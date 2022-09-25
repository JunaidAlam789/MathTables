//import { render } from '@testing-library/react'
import React from 'react'
const useState= React.useState
//import ReactDOM from 'react-dom'

export  function Square(props){
    var a = [1,2,3,4,5,6,7,8,9,10];
        
    const moves = a.map((move)=>{return(<h1>{props.value}x{move}={move*props.value}</h1>);});
          return (moves);
        
    }
                
      


export function Board(props){
     
    const [number, setNumber]=useState(4)
    
     
        return (
        
        <scan>
            <AddForm setNumber={setNumber} number={number} />
       <Square value={number} className='square' />
        </scan>
        );
      }
    

    export function AddForm(props){
       const [numb, setNumb]=useState(5)

        function formEventHandler(e){
            e.preventDefault()
         props.setNumber(numb) 
         //lert(numb) 
        }
        return(
            <form onSubmit={formEventHandler}>
                <fieldset>
                    <legend> Table </legend>
                <input onChange={e => setNumb(e.target.value)} placeholder="Number for Table"></input>
                <button>Submit</button>
                </fieldset>
            </form>

        )


    }

