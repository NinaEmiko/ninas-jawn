import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CodeJawnTab from './components/CodeJawnTab';
import BattleJawnTab from './components/BattleJawnTab';
import HomeTab from './components/HomeTab';

function App() {
  return (
<Router>
      <div className="container">
        <nav className='nav'>
          <ul className='nav-list'>
            <li><Link to="/" data-testid="home-link">Home</Link></li>
            <li><Link to="/codejawn" data-testid="code-jawn-link">Code Jawn</Link></li>
            <li><Link to="/battlejawn" data-testid="battle-jawn-link">Battle Jawn</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomeTab />} />
          <Route path="/codejawn" element={<CodeJawnTab />} />
          <Route path="/battlejawn" element={<BattleJawnTab />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
