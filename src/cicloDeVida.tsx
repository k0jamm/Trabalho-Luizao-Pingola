import { useState, useEffect } from 'react';

function Ciclo5() {
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
      <h1>Práticas com Ciclo de vida</h1>
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

export default Ciclo5;
