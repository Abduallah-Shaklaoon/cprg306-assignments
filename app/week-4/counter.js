"use client";
import { useState } from 'react';




export default function Counter() {
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    
    return (
        <div className=' bg-yellow-300 text-lime-300'>
            <h1>Counter</h1>
            <p>Count {count}</p>
            <div className='flex-row'>
                <button onClick={increment} disabled={count == 20} className='m-auto pr-2'>Increment</button>
                <button onClick={decrement} disabled={count == 1} className='m-auto pl-2'>Decrement</button>
            </div>
       </div>
        
    );
}