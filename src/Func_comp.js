import React, { useState, useEffect } from 'react'

const Func_comp = () => {
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(10);

    useEffect(() => {
      console.log('useeffect çalıştı')
    },[counter])

    const increase = () => {
        setCounter(counter +1)
    }

  return (
    <div>
        <h2>State Çalışması</h2>
        <p>Counter : {counter}</p>
        <button onClick={() => increase()}>Artır</button>
        <h2>State Çalışması2</h2>
        <p>Counter2 : {counter2}</p>
        <button onClick={() => setCounter2(counter2 +1)}>Artır2</button>
    </div>
  )
}

export default Func_comp