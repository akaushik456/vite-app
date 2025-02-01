import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import dashboard from './components/dashboard.jsx'; // Make sure the import matches the component name

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
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
          <Route path="/dashboard" element={<dashboard />} /> {/* Corrected the component name */}
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
