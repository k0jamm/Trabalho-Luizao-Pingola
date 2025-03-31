import { useState, useEffect, useRef } from 'react';

function Ref4() {

  const nameInputRef = useRef<HTMLInputElement>(null);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const startTimer = () => {
    if (!isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; 
      setIsRunning(false);
    }
  };

  return (
    <div>
      <h1>Práticas com useRef</h1>
      {/* Formulário com foco automático */}
      <h2>Formulário</h2>
      <input type="text" placeholder="Nome" ref={nameInputRef} />
      <input type="email" placeholder="Email" />
      <button>Enviar</button>

      <hr />

      {/* Timer com pausa e retomada */}
      <h2>Timer</h2>
      <h3>Tempo: {timer}s</h3>
      <button onClick={isRunning ? pauseTimer : startTimer}>
        {isRunning ? "Pausar" : timer > 0 ? "Retomar" : "Iniciar"}
      </button>
    </div>
  );
}

export default Ref4;
