import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import CounterPage from './views/CounterPage';

function App() {
  return (
    <div className="App">
      <h2>Navbar</h2>
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/counter' element={<CounterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
