import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import AppNav from './components/AppNav';
import LoadingSpinner from './components/LoadingSpinner';
import { getAuthorization } from './services/auth.service';
import Views from './views';
import ConfirmtaionModal from './components/ConfimationModal'

function App() {
  const [isLogin, setisLogin] = useState(false)

  useEffect(() => {
    getAuthorization().then((response) => {
      setisLogin(response.data.result)
    });
  }, []);

  return (
    <div className="App">
      <AppNav isLogin={isLogin} />
      <LoadingSpinner />
      <Views isLogin={isLogin} />
      <ConfirmtaionModal/>
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

    </div>
  );
}

export default App;
