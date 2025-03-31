import { useState } from 'react';
import './useState.css';

function State1() {

    const [count, setCount] = useState(0);

    const [inputText, setInputText] = useState<string>(''); // Specify inputText as a string
    const [testArray, setTestArray] = useState<string[]>([]); // Specify testArray as an array of strings
  
    // Add item to list
    function adicionarlist() {
      if (inputText.trim() !== '') {
        setTestArray((prevArray) => [...prevArray, inputText]); // Add new string to the array
        setInputText(''); // Clear input field after adding
      }
    }
  
    // Render the list of elements
    function printList() {
      return testArray.map((element, index) => (
        <h1 key={index}>{element}</h1>
      ));
    }


    return( 
    <>
    
    <h1>Práticas com useState</h1>

      

      <div className="card">
        <h2>Contador Simples</h2>
        <h3>count is {count}</h3>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Adicionar
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          Diminuir
        </button>
      </div>

      <div className="list">
        <h2>Lista de Tarefas</h2>
        {/* Input for adding text */}
        <input
          type="text"
          placeholder="Type something"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} // Update inputText on change
        />
        <button onClick={adicionarlist} type="button">
          Adicionar text
        </button>

        {/* Render the list of items */}
        {printList()}  
      </div>
  
    </>
    );
  }
  
  export default State1;