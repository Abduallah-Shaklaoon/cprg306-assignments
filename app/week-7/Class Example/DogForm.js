"use-client";
import { useState } from "react";

export default function DogForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, age);
    };
    const handleAge = (event) => {
        setAge(event.target.value);
    };
    return(
        <div className="p-5 w-96">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="border border-black" value={name} onChange={(event)=> setName(event.target.value)}/>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" onChange={(e)=>handleAge(e)}/>
                <button type="reset" className="border border-black">Submit</button>
            </form>
            <div>
                {name.length !== 12 && <p>{name} is {age} years old</p>}
            </div>
        </div>
    );
}