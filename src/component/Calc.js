
import React from 'react'
import { useState } from 'react'

const Calc = () => {
    const [calculate, setCalculate]=useState('');
    const [result, setResult]=useState('');

    const ops=['/', '+', '-', '*', '.']

    const updateCalc= (value)=>{
      
        if(
            ops.includes(value) && calculate === "" ||  ops.includes(value) && ops.includes(calculate.slice(-1))
        ) { 
            return;
        } if(
            !ops.includes(value)){
                setResult(eval(calculate + value).toString())
            }
        
        setCalculate(calculate + value)
    }
    const finalAnswer=()=>{
        setCalculate(eval(calculate).toString())
    }
    const deleteButton=()=>{
        if(calculate === ''){
            return;
        } 
        const value= calculate.slice(0, -1)
        setCalculate(value)

    }
  return (
    <div className='wrapper'>
        <h2  className='calcu'>Calculator App</h2>
        
        <div className='input'>
        <span>{result? <span>({result})</span>: ''}</span> {calculate || 0} 
        </div>

        <div className='grid'>
        <button onClick={()=>updateCalc('+')} >+</button>
        <button onClick={()=>updateCalc('-')}>-</button>
        <button onClick={()=>updateCalc('*')}>*</button>
        <button onClick={()=>updateCalc('/')}>/</button>
        

        <button onClick={deleteButton} >DEL</button>
        

        
            <button onClick={()=> updateCalc('7')}>7</button>
            <button onClick={()=> updateCalc('8')}>8</button>
            <button onClick={()=> updateCalc('9')}>9</button>
            <button onClick={()=> updateCalc('4')}>4</button>
            <button onClick={()=> updateCalc('5')}>5</button>
            <button onClick={()=> updateCalc('6')}>6</button>
            <button onClick={()=> updateCalc('1')}>1</button>
            <button onClick={()=> updateCalc('2')}>2</button>
            <button onClick={()=> updateCalc('3')}>3</button>
            <button onClick={()=> updateCalc('0')}>0</button>
            <button onClick={()=> updateCalc('.')} className='a'>.</button>

            <button onClick={finalAnswer} className='b'>=</button>

        </div>
    </div>
  )
}

export default Calc