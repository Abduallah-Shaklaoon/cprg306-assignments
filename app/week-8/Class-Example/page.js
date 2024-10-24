"use client";

import { useState, useEffect } from "react";

export default function Page() {
    const [dogUrl, setDogUrl] = useState("");
    const [breeds, setBreeds] = useState([]);
    
    const getRandomDog = async (breed) => {

        try {
            const response = breed 
            ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`) 
            : await fetch("https://dog.ceo/api/breeds/image/random");
            const data = await response.json();
            setDogUrl(data.message); //set the dogUrl state to the url of the image
        } catch (error) {
            console.error("Error dog gone!",error);
        }
    };
    
    useEffect(() => {
        getDogBreeds();
        getRandomDog();
    }, []);

    const getDogBreeds = async () => {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        const breedsAsObject = data.message;
        const breeds = Object.keys(breedsAsObject); //Array of breed names /keys
        setBreeds(breeds);
    };

    return (
        <div>
            <h1>Week 8 Demo</h1>
            <div>
                <select onChange = {()=>getRandomDog(event.target.value)}>
                    {breeds.map((breed) => (
                        <option key={breed} value={breed}>
                            {breed}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <img src={dogUrl} alt="Random Dog" />
            </div>
        </div>
    );
}