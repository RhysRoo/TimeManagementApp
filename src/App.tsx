import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Homepage() {
    return(
        <div>
            
        </div>
    )
}

export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    );
  }