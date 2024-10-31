export default function Item({ name, quantity, category }) {
  return (
    <div className="p-5 w-96">
      <ul className="bg-cyan-300 w-80 mr-3 p-2 rounded shadow-xl hover:bg-green-500 hover:p-8">
        <h2 className="font-bold text-xl">{name}</h2>
        <p>
          Buy: {quantity} in {category}
        </p>
      </ul>
    </div>
  );
}
function MyComponent() {
  const [sortedData, setSortedData] = useState([]);
  const [ascending, setAscending] = useState(true); // Initial sorting order

  const handleSortClick = () => {
    // Toggle sorting order
    setAscending(!ascending);

    // Sort your data (replace with your actual sorting logic)
    const sortedArray = [...yourData].sort((a, b) => {
      if (ascending) {
        return a.value - b.value; // Ascending order
      } else {
        return b.value - a.value; // Descending order
      }
    });

    setSortedData(sortedArray);
  };
  return (
    <div>
      <button onClick={handleSortClick}>Toggle Sort</button>
      <ul>
        {sortedData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
        ;
      </ul>
    </div>
  );
}
