import ItemList from "./item-list";

export default function Page(){
    return(
        <main>
            <h1>Week 3 Assignment / Shopping List</h1>
            <ItemList/>
            
        </main>
    );
}

/*    let dog2 ={
        name: "Buddy",
        breed: "Golden Retriever",
        age: 5,
        weight: 65,
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a"
    };
    let dog3 ={
        name: "Molly",
        breed: "Goldendoodle",
        age: 2,
        weight: 55,
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a"
    };
    return (
        <div className="ml-4 mt-2">
            <h1 className="text-2x1 font-bold">Week 3 Demo</h1>
            <p>Click on a dog to learn more about them.</p>
            <div>
                <img src={dog2.image} alt={dog2.name} />
                <h2>{dog2.name}</h2>
                <p>{dog2.breed}</p>
                <p>Age: {dog2.age}</p>
                <p>Weight: {dog2.weight}</p>
            </div>
            <div>
                <img src={dog3.image} alt={dog3.name} />
                <h2>{dog3.name}</h2>
                <p>{dog3.breed}</p>
                <p>Age: {dog3.age}</p>
                <p>Weight: {dog3.weight}</p>
            </div>
        </div>
    );*/