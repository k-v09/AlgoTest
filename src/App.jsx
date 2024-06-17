import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sorts from './pages/Sorts';
//import './App.css';

const App = () => {

  return (
    <Router>
      <main>
        <Routes>
        <Route path='/' element={<Sorts />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App;
