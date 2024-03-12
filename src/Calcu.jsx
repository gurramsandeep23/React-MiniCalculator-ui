import React ,{useState}from 'react'

const Calcu = () => {
  const[counter,setCounter]=useState(0)
  const[inputValue,setInputValue]=useState(0);


  const Increment=()=>{
    setCounter(counter+1)
  }


  const Decrement=()=>{
    setCounter(counter-1)
  }

  const Reset=()=>{
    setCounter(0)
  }

  const inputChange=(value)=>{
    setInputValue(value)
  }

  const addInputvalue=()=>{
    setCounter(counter +Number(inputValue))
  }
  return (
    <div className='button'>
      <div className="head">
        <h1>Mini Calculator</h1>
      </div>
      <h1>{counter}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <br />
      <input type="number" onChange={(e)=>inputChange(e.target.value)}value={inputValue} />
      <button onClick={addInputvalue}>Add</button>

    </div>
  )
}

export default Calcu