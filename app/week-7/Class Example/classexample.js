
"use client";
import { useState } from 'react';
import dogsJson from "./dogs.json";
import Image from "next/image";
export default function Page() {
    let dog = [...dogsJson];
    const[dogs, setDogs] = useState([...dogsJson]);
    const[sortABC, setSortABC] = useState(true);
    //dogs.sort((a, b) => a.name.localeCompare(b.name));
    const[selectedDogId, setSelectedDogId] = useState(-1);
    const handleClick = (id) => {
        if(selectedDogId === id){
            setSelectedDogId(-1);
            return;
        }
        setSelectedDogId(id);
    }
    const changeSort =()=>{
        setSortABC(!sortABC);
        const sortedDogs = dog.sort((a, b) => sortABC ? a.name.localeCompare(b.name) : a.description.localeCompare(b.description));
        setDogs(sortedDogs);
    }

    return(
        <div>
            <h1>Dogs</h1>
            <p>Current dog {selectedDogId}</p>
            <button onClick={changeSort}>Sort</button>
            <ul className='flex m-2'>
                {dogs.map(dog => (
                    <li key={dog.id} onClick={()=> handleClick(dog.id)} className={`flex ${ dog.id === selectedDogId ? "bg-slate-200" : "bg-slate-500" } m-10`}>
                        <h2>{dog.name}</h2>
                        <p>{dog.description}</p>
                        <Image src={dog.imageUrl} alt={dog.name} width={300} height={250}/>
                    </li>
                ))}
                </ul>
        </div>
    );
};