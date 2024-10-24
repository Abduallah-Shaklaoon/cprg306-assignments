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
        alert(`Added item: ${name} Quantity: ${count} Category: ${category}`);
        event.preventDefault();
        setName('');
        setCount(1);
        setCategory('');

    };

    
    return (

        <div className='bg-black border-2 border-gray-500 text-white shadow-2xl flex-col align-center rounded-xl m-5 p-5'>
            <p>Count {count}</p>
            <button onClick={increment} disabled={count == 20} className="m-3 border border-white bg-gray-600 p-1 hover:bg-slate-900 rounded-lg">Increment</button>
            <button onClick={decrement} disabled={count == 1} className="m-3 border border-white bg-gray-600 p-1 hover:bg-slate-900 rounded-lg">Decrement</button>
            <form onSubmit={e => handleSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className=" text-black m-3 border border-white rounded-lg" value={name} onChange={handleName}/>
                
                <select id="category" name="category" className="p-1 text-black m-3 border border-white rounded-lg focus:bg-slate-200" value={category} onChange={handleCategory}>
                    <option value="Category" disabled>Category</option>v
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Goods">Frozen Goods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
                
                <button type="submit" className="m-3 border border-white bg-gray-600 p-1 hover:bg-slate-900 rounded-lg">Submit</button>
            </form>
       </div>

        
    );
}