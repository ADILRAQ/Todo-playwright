import React, { useState } from "react";


export default function Data() {

  const [maps, setMaps] = useState<string[]>([])
  const [inputs, setInputs] = useState<string>('');

  const handleClick = () => {
    setMaps(values => [...values, inputs]);
    setInputs('');
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(event.target.value);
};


  return (
    <div style={{
      marginLeft: '10px'
    }}>
      <h1>data</h1>
      {/* <form> */}
        <input type="text" placeholder="todo" value={inputs} onChange={handleChange}/>
        <button onClick={handleClick} type='button' >Add</button>
      {/* </form> */}

      <ul data-testId='items-list'>
        {
          maps.map(data => <p data-testId='item' >{data}</p>)
        }
      </ul>
    </div>
  );
}