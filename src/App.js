import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import CounterPage from './views/CounterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/counter' element={<CounterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
