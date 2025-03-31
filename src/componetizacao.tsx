import { useState, useEffect, useRef } from "react";

// 🔹 Header da Aplicação
function Header() {
  return (
    <header style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <h1>Práticas com Componetização</h1>
      <h2>header que nao funciona mta preguica💪</h2>
      <nav>
        <a href="#">Home</a> | <a href="#">Sobre</a> | <a href="#">Contato</a>
      </nav>
    </header>
  );
}

// 🔹 Componente de Cache com API
function CacheComponent() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("✅ Componente montado!");

    return () => {
      console.log("❌ Componente desmontado! Limpando cache...");
      localStorage.removeItem("cachedData");
    };
  }, []);

  useEffect(() => {
    const cachedData = localStorage.getItem("cachedData");

    if (cachedData) {
      console.log("🔄 Dados carregados do cache!");
      setData(JSON.parse(cachedData));
      setLoading(false);
    } else {
      console.log("🌐 Buscando dados da API...");
      fetch("https://www.amiiboapi.com/api/amiibo/")
        .then((res) => res.json())
        .then((response) => {
          const names = response.amiibo.map((item: any) => item.name);
          setData(names);
          localStorage.setItem("cachedData", JSON.stringify(names));
          setLoading(false);
        })
        .catch((err) => {
          console.error("Erro ao buscar dados:", err);
          setLoading(false);
        });
    }
  }, []);

  return (
    <div>
      <h2>Lista de Amiibos</h2>
      {loading ? <p>Carregando...</p> : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 🔹 Componente de Timer com Pausa e Retomada
function Timer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);

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
      <h2>Timer</h2>
      <h3>Tempo: {timer}s</h3>
      <button onClick={isRunning ? pauseTimer : startTimer}>
        {isRunning ? "Pausar" : timer > 0 ? "Retomar" : "Iniciar"}
      </button>
    </div>
  );
}

// 🔹 Componente de Formulário com Auto Focus
function Formulario() {
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h2>Formulário</h2>
      <input type="text" placeholder="Nome" ref={nameInputRef} />
      <input type="email" placeholder="Email" />
      <button>Enviar</button>
    </div>
  );
}

// 🔹 Componente Principal (App)
function Componetizacao6() {
  return (
    <div>
      <Header />
      <Formulario />
      <Timer />
      <CacheComponent />
    </div>
  );
}

export default Componetizacao6;