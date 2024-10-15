"use client";
import { useState } from 'react';
import {Alert} from 'react';



export default function NewItem() {
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

        <div className='bg-black border-2 border-gray-500 text-white shadow-2xl flex-col align-center rounded-xl m-5 p-5'>
            <p>Count {count}</p>
            <button onClick={increment} disabled={count == 20} className="m-3 border border-white bg-gray-600 p-1 hover:bg-slate-900">Increment</button>
            <button onClick={decrement} disabled={count == 1} className="m-3 border border-white bg-gray-600 p-1 hover:bg-slate-900">Decrement</button>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="m-3 border border-white" value={name} onChange={handleName}/>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" className="m-3 border border-white" value={category} onChange={handleCategory}/>
                <button type="submit" className="m-3 border border-white bg-gray-600 p-1 hover:bg-slate-900">Submit</button>
            </form>
       </div>

        
    );
}