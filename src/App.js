import './styles/App.css';

import Home from './components/Home';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="app">

      <Routes>
        <Route path='/' element={<><Home/></>} />
        <Route path="*" element={<><NotFound/></>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
