export default function Item({name, quantity, category}){ 
    return(
        <div className="p-5 w-96">
            <ul className="bg-cyan-300 w-80 mr-3 p-2 rounded shadow-xl hover:bg-green-500 hover:p-8">
                <h2 className="font-bold text-xl">{name}</h2>
                <p>Buy: {quantity} in {category}</p>
            </ul>
        </div>
    );
}