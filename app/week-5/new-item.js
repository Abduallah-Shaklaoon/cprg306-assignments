"use client";
import { useState } from 'react';
import {Alert} from 'react';



export default function Counter() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    const handleCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`Name: ${name} ${count} ${category}`);
        event.preventDefault();
        setName('');
        setCount(1);
        setCategory('');

    };

    
    return (

        <div className=' bg-yellow-300 text-black'>
            <h1>Counter</h1>
            <p>Count {count}</p>
            <button onClick={increment} disabled={count == 20} className='m-auto pr-2'>Increment</button>
            <button onClick={decrement} disabled={count == 1} className='m-auto pl-2'>Decrement</button>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="border border-black" value={name} onChange={handleName}/>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value={category} onChange={handleCategory}/>
                <button type="submit" className="border border-black">Submit</button>
            </form>
       </div>

        
    );
}