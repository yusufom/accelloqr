// const [inputs, setInputs] = useState({ data: [{ name: '', phone: '' }] });

// const handleInputChange = (index, key, value) => {
//     setInputs((prevState) => {
//         const newData = [...prevState.data];
//         newData[index][key] = value;
//         return { data: newData };
//     });
// };

// const handleAddInput = () => {
//     setInputs((prevState) => {
//         const newData = [...prevState.data, { name: '', phone: '' }];
//         return { data: newData };
//     });
// };

// <div>
//     {inputs.data.map((item, index) => (
//         <div key={index}>
//             <input
//                 value={item.name}
//                 onChange={(e) => handleInputChange(index, 'name', e.target.value)}
//             />
//             <input
//                 value={item.phone}
//                 onChange={(e) => handleInputChange(index, 'phone', e.target.value)}
//             />
//         </div>
//     ))}
//     <button onClick={handleAddInput}>Add more</button>

//     {inputs.data?.map((items, index) => (
//         <div>
//             {index} --- {items.name} - {items.phone}
//         </div>
//     ))}
// </div>