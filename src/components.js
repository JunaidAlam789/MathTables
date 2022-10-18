//import { render } from '@testing-library/react'
//import { toHaveFocus } from '@testing-library/jest-dom';
import React from 'react'
const useState= React.useState
//import ReactDOM from 'react-dom'

export  function Square(props){
    var a = [1,2,3,4,5,6,7,8,9,10];
    var b=  [props.numb1, props.numb2, props.numb3, props.numb4, props.numb5,
        props.numb6,props.numb7,props.numb8,props.numb9,props.numb10];
      
     let i=0;   
    const tables = a.map((move)=>{
        for(let j=0; j<=9; j++){
            b[j]=(b[j] !== 0) ? (b[j]): " wrong answer "
          }
        return(<>
    {/* <h1>{props.value}x{move}={move*props.value}</h1> */}
     <h1>{props.value} x {move} = {(b[i++])}</h1> 
      
    </>
    );});
          return (tables);
        
    }
                
      


export function Board(props){
     
    const [number, setNumber]=useState(4)
    const [numb1, setNumb1]=useState()
    const [numb2, setNumb2]=useState()
    const [numb3, setNumb3]=useState()
    const [numb4, setNumb4]=useState()
    const [numb5, setNumb5]=useState()
    const [numb6, setNumb6]=useState()
    const [numb7, setNumb7]=useState()
    const [numb8, setNumb8]=useState()
    const [numb9, setNumb9]=useState()
    const [numb10, setNumb10]=useState()
     
        return (
        
        <scan>
       <AddForm setNumber={setNumber} number={number} />
       <Square value={number}  
       numb1={numb1}
       numb2={numb2}
       numb3={numb3}
       numb4={numb4}
       numb5={numb5}
       numb6={numb6}
       numb7={numb7}
       numb8={numb8}
       numb9={numb9}
       numb10={numb10}
       
       className='square' />
       <AddFormQuiz setNumber={setNumber}
       setNumb1={setNumb1}
       setNumb2={setNumb2}
       setNumb3={setNumb3}
       setNumb4={setNumb4}
       setNumb5={setNumb5}
       setNumb6={setNumb6}
       setNumb7={setNumb7}
       setNumb8={setNumb8}
       setNumb9={setNumb9}
       setNumb10={setNumb10}
       number={number} />
       </scan>
        );
      }
    

    export function AddForm(props){
       const [number, setNumber]=useState(5)

        function formEventHandler(e){
            e.preventDefault()
         props.setNumber(number) 
         //alert(numb) 
        }
        return(
            <form onSubmit={formEventHandler}>
                <fieldset>
                    <legend> Table </legend>
                <input onChange={e => setNumber(e.target.value)} placeholder="Number for Table"></input>
                <button>Submit</button>
                </fieldset>
            </form>

        )
    }

    export function AddFormQuiz(props){
        const [numb, setNumb]=useState([4,8,12,16,20,24,28,32,36,40])
       // const [answers, setAnswers]=useState([4,8,12,16,20,24,28,32,36,40])
       

         function formEventHandler(e){
             e.preventDefault()
          //props.setNumber(numb) 
          setNumb([1,1,1,1,1,1,1,1,1,1])
          if (true) {alert(numb)}
          //lert(numb) 
        
         }
         return(
             <form onSubmit={formEventHandler}>
                 <fieldset>
                     <legend> Table </legend>
                
                  <p>{props.number} x 1 = <input onChange={e => {if (e.target.value=== props.number *1 ){ props.setNumb1(e.target.value)} else {props.setNumb1(0)} }} placeholder="Ans"></input></p> 
                  <p>{props.number} x 2 = <input onChange={e => {if (e.target.value=== props.number *2 ){ props.setNumb2(e.target.value)} else {props.setNumb2(0)} }} placeholder="Ans"></input></p> 
                  <p>{props.number} x 3 = <input onChange={e => {if (e.target.value=== props.number *3 ){ props.setNumb3(e.target.value)} else {props.setNumb3(0)} }} placeholder="Ans"></input></p> 
                  <p>{props.number} x 4 = <input onChange={e => {if (e.target.value=== props.number *4 ){ props.setNumb4(e.target.value)} else {props.setNumb4(0)} }} placeholder="Ans"></input></p> 
                  <p>{props.number} x 5 = <input onChange={e => {if (e.target.value=== props.number *5 ){ props.setNumb5(e.target.value)} else {props.setNumb5(0)} }} placeholder="Ans"></input></p> 
                  <p>{props.number} x 6 = <input onChange={e => {if (e.target.value=== props.number *6 ){ props.setNumb6(e.target.value)} else {props.setNumb6(0)} }} placeholder="Ans"></input></p> 
                  <p>{props.number} x 7 = <input onChange={e => {if (e.target.value=== props.number *7 ){ props.setNumb7(e.target.value)} else {props.setNumb7(0)} }} placeholder="Ans"></input></p> 
                  <p>{props.number} x 8 = <input onChange={e => {if (e.target.value=== props.number *8 ){ props.setNumb8(e.target.value)} else {props.setNumb8(0)} }} placeholder="Ans"></input></p> 
                  <p>{props.number} x 9 = <input onChange={e => {if (e.target.value=== props.number *9 ){ props.setNumb9(e.target.value)} else {props.setNumb9(0)} }} placeholder="Ans"></input></p> 
                  <p>{props.number} x 10 = <input onChange={e => {if (e.target.value=== props.number *10 ){ props.setNumb10(e.target.value)} else {props.setNumb10(0)} }} placeholder="Ans"></input></p> 
                  <button>Submit</button>
                 </fieldset>
             </form>
 
    )
     }

