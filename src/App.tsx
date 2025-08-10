import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Homepage() {
    return(
        <div className="flex flex-col bg-black space-y-8 p-8">
            <div className="flex flex-row bg-white space-x-8 p-8">
                <h1 className="text-lg text-red-500">Hello react in elect!!</h1>
                <h1 className="text-lg text-red-500">Homepage</h1>
            </div>
            <div className="flex flex-row bg-white space-x-8 p-8">
                <h1 className="text-lg text-red-500">Hello react in electron</h1>
                <h1 className="text-lg text-red-500">Homepage</h1>
            </div>
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