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
        <div className='bg-black border-2 border-gray-500 text-white w-24 shadow-2xl rounded-xl'>
            <p className="mt-5 ml-3">Count {count}</p>
            <div className='flex-row mt-5 mb-5'>
                <button onClick={increment} disabled={count == 20} className='mr-2 ml-4 pr-2 pl-2 rounded border-solid border-2 disabled:bg-orange-300 disabled:border-none border-green-600 hover:bg-green-600 bg-slate-500'>+</button>
                <button onClick={decrement} disabled={count == 1} className='ml-2 pr-2 pl-2 rounded border-solid border-2 bg-slate-500 border-red-600 hover:bg-red-600 disabled:bg-orange-300 disabled:border-none'>-</button>
            </div>
       </div>
        
    );
}