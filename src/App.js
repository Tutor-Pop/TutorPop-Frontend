import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import AppNav from './components/AppNav';
import LoadingSpinner from './components/LoadingSpinner';
import { getAuthorization } from './services/auth.service';
import Views from './views';

function App() {
  const [isLogin, setisLogin] = useState(false)

  useEffect(() => {
    getAuthorization().then((response) => {
      console.log(response.data)
      setisLogin(response.data.result)
    });
  }, []);

  return (
    <div className="App">
      <AppNav isLogin={isLogin} />
      <LoadingSpinner />
      <Views isLogin={isLogin} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
