import { useEffect, useState } from 'react';

interface Amiibo {
  head: string;
  image: string;
  name: string;
}

function Effect2() {
  const [tempo, setTempo] = useState(10);
  const [amiibos, setAmiibos] = useState<Amiibo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Contador regressivo
  useEffect(() => {
    if (tempo <= 0) return;

    const intervalo = setInterval(() => {
      setTempo((prevTempo) => prevTempo - 1);
    }, 1000);

    return () => clearInterval(intervalo); // Limpa o timer ao desmontar o componente
  }, [tempo]);

  // Requisição para a API de Amiibos
  useEffect(() => {
    const apiUrl = 'https://www.amiiboapi.com/api/amiibo/';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        return response.json();
      })
      .then((data) => {
        setAmiibos(data.amiibo);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

  }, []); // Executa apenas na montagem do componente

  // Renderiza enquanto carrega ou se houver erro
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      <h1>Práticas com useEffect</h1>
      <h2>Timer Simples</h2>
      <h3>Tempo restante: {tempo}s</h3>
      {tempo === 0 && <p>O tempo acabou!</p>}

      <h1>Lista de Amiibos</h1>
      <ul>
        {amiibos.slice(0, 10).map((amiibo) => (
          <li key={amiibo.head}>
            <img src={amiibo.image} alt={amiibo.name} width={100} />
            <p>{amiibo.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Effect2;
