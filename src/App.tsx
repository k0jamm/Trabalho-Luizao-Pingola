import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import State1 from './useState.tsx'
import Effect2 from './useEffect.tsx'
import Memo3 from './useMemo.tsx';
import Ref4 from './useRef.tsx';
import Ciclo5 from './cicloDeVida.tsx';
import Componetizacao6 from './componetizacao.tsx';
import { Link } from 'react-router-dom';

function App() {
  

  return (
    <>

<Router>

      <header style={{ padding: "10px", background: "#5C4033", color: "white" }}>
        <h1>Trabalho luizao pingolas</h1>
        <nav>
              <Link to="/State1">Práticas com useState</Link> | <Link to="/Effect2">Práticas com useEffect</Link> | <Link to="/Memo3">Práticas com useMemo</Link> | <Link to="Ref4">Práticas com useRef</Link> | <Link to="Ciclo5">Práticas com Ciclo de Vida</Link> | <Link to="Componetizacao6">Práticas com Componetização</Link>
        </nav>
      </header>
      <div>
        
        
        <Routes>
          <Route path="/State1" element={<State1 />} />
          <Route path="/Effect2" element={<Effect2 />} />
          <Route path="/Memo3" element={<Memo3 />} />
          <Route path="/Ref4" element={<Ref4 />} />
          <Route path="/Ciclo5" element={<Ciclo5 />} />
          <Route path="/Componetizacao6" element={<Componetizacao6 />} />
        </Routes>
      </div>
    </Router>

      

    </>
  );
}

export default App;
