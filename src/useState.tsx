import { useState } from 'react';
import './useState.css';

function State1() {

    const [count, setCount] = useState(0);

    const [inputText, setInputText] = useState<string>(''); 
    const [testArray, setTestArray] = useState<string[]>([]); 
  
    function adicionarlist() {
      if (inputText.trim() !== '') {
        setTestArray((prevArray) => [...prevArray, inputText]);
        setInputText(''); 
      }
    }
  
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
        {}
        <input
          type="text"
          placeholder="Type something"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)} 
        />
        <button onClick={adicionarlist} type="button">
          Adicionar text
        </button>

        {}
        {printList()}  
      </div>
  
    </>
    );
  }
  
  export default State1;