import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';  // Make sure the import matches the component name

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn moresdfgsdbdb
        </p>

        {/* Routes for navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} /> {/* Corrected the component name */}
        </Routes>
      </div>
    </Router>
  );
}

// Sample Home component
function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

export default App;
