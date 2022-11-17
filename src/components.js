//import { render } from '@testing-library/react'
//import { toHaveFocus } from '@testing-library/jest-dom';
import React, { useEffect } from 'react'
const useState= React.useState

  
     export function TableForm(props) {
        const [number, setNumber]=useState(props.value)
        const [userAns, setUserAns]= useState()
        const [userAnswer, setUserAnswer]=useState([])
        const [keys, setKeys]=useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
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
        
        //const [numb, setNumb]=useState([4,8,12,16,20,24,28,32,36,40])
        useEffect(()=>{
            setNumber(number)

        },[number])

        const [numb, setNumb]=useState([,,,,,,,,,])
        const [ans, setAns]=useState([,,,,,,,,,])
         let i=[0,1,2,3,4,5,6,7,8,9];
         function setStates (a,index, indexValue){
            a[index]=indexValue
            return(a)
        }
        function formEventHandler1(e){
            e.preventDefault()
         //setNumb(setStates(4,5))
         setNumber(number)
         setNumb([,,,,,,,,,])
         setAns([,,,,,,,,,])
         setUserAns('')
         setUserAnswer(['','','','','','','','','',''])
         
        
        }
       function formEventHandler3(f){
        f.preventDefault()
        let count=0;
        ans.map((result)=> {if(result=="correct"){count++}})
        if(count===10){
            alert("Excellent !!!")
            setAns([,,,,,,,,,])
            setNumb([,,,,,,,,,])
            setUserAnswer(['','','','','','','','','',''])
        }
        else {
            alert("Try Again")
            
        }
       
       }
        function onChangeInput1(e,index){
        e.preventDefault()
        console.log(e.target.value)
        let b=numb;
        if(index==1) setNumb1(e.target.value);
        if(index==2) setNumb2(e.target.value);
        if(index==3) setNumb3(e.target.value);
        if(index==4) setNumb4(e.target.value);
        if(index==5) setNumb5(e.target.value);
        if(index==6) setNumb6(e.target.value);
        if(index==7) setNumb7(e.target.value);
        if(index==8) setNumb8(e.target.value);
        if(index==9) setNumb9(e.target.value);
        if(index==10) setNumb10(e.target.value); 
        setAns(setStates(ans,index,e.target.value))
        setNumb(setStates(numb,index,e.target.value))
        setUserAnswer(setStates(numb,index,e.target.value))
         
        let answer=(number*(index+1));
        if(answer== e.target.value){ setStates(ans,index,"correct")}
        else { setStates(ans,index,"wrong")}
         
        
            
        }

        function onChangeNumberReset(){
            setAns([,,,,,,,,,])
            setNumb([,,,,,,,,,])
            setUserAnswer(['','','','','','','','','',''])
        }
        
                
        return (<>


        <form key="1234" onSubmit={formEventHandler1}>
            <fieldset>
                <legend> Table </legend>
            <input value={userAns} onChange={e => {setNumber(e.target.value); setUserAns(e.target.value); onChangeNumberReset();}} placeholder="Number for Table"></input>
            <button>Submit</button>
            </fieldset>
        </form>
         <h1>Multiplication Table of {number}</h1>
        <form key="1235" onSubmit={formEventHandler3} >
        <fieldset>
        {i.map((index)=>{return (
       
        <h3 key={"12"+keys[index]}>{number} x {index+1} = <input value={userAnswer[index]} onChange={(e)=>onChangeInput1(e,index)} keys={13+keys[index+10]} index={index}  placeholder="Ans"></input> {ans[index]} </h3> 
       
        ) })}
        <button>Submit</button>
        </fieldset>
        </form >
        <h3>Powered by KvobjeSoft</h3>
        </>);
   


     }
    