import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import CounterPage from './views/CounterPage';
import Loginpage from './views/Loginpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registerpage from './views/Registerpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/counter' element={<CounterPage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Registerpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
