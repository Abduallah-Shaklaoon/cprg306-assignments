"use client";
import { useState } from "react";


export default function ClassExample(){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, quantity, category);
    };
    const handleQuantity = (event) => {
        setQuantity(event.target.value);
    };
    const handleCategory = (event) => {
        setCategory(event.target.value);
    }
    return(
        <div className="p-5 w-96">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="border border-black" value={name} onChange={(event)=> setName(event.target.value)}/>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" onChange={(e)=>handleQuantity(e)}/>
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" className="border border-black" onChange={(e)=>handleCategory(e)}/>
                <button type="reset" className="border border-black">Submit</button>
            </form>
            <div>
                {name.length !== 12 && <p>Name: {name} Quantity {quantity} category {category}</p>}
            </div>
        </div>
    );
}