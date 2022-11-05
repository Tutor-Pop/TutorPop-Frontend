import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import AppNav from './components/AppNav';
import LoadingSpinner from './components/LoadingSpinner';
import { getAuthorization } from './services/auth.service';
import Views from './views';

function App() {
  const [isLogin,setisLogin] = useState(false)

  useEffect(() => {
    getAuthorization().then((response) => {
      console.log(response.data)
      setisLogin(response.data.result)
    });
}, []);

  return (
    <div className="App">
      <AppNav isLogin={isLogin}/>
      <LoadingSpinner/>
      <Views isLogin={isLogin}/>
    </div>
  );
}

export default App;
