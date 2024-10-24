"use-client";
// import { useState } from 'react';
import dogData from '.dog-data.json';
import Dog from './Dog';
export default function DogList() {
    const [dogs, setDogs] = useState(dogData);
    return (
        <div>
            <h1>Dogs</h1>
                {dogs.map(dog => (
                    <Dog key={dog.id}name={dog.name} age={dog.age} />
                ))}
        </div>
    );
}