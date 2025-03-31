import { useState, useMemo } from 'react';

function Memo3() {

  const items = ['Banana', 'Maçã', 'Pera', 'Laranja', 'Abacaxi', 'Uva', 'Melancia', 'Cereja'];
  const [filter, setFilter] = useState('');

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('+');

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  const result = useMemo(() => {
    switch (operation) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 !== 0 ? num1 / num2 : 'Erro';
      default: return 0;
    }
  }, [num1, num2, operation]);

  return (
    <div>
      <h1>Práticas com useMemo</h1>  
      {/* Lista Filtrada */}
      <h2>Lista Filtrada</h2>
      <input
        type="text"
        placeholder="Filtrar..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />

      {/* Calculadora Simples */}
      <h2>Calculadora Simples</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <h2>Resultado: {result}</h2>
    </div>
  );
}

export default Memo3;
