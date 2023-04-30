import { ToastContainer } from "react-toastify";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import { AuthContextProvider } from "./contexts/AuthContext";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    /* Thought this would be how it's implemented but maybe not
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
    </Router>*/
    
    <AuthContextProvider>
      <div className="App">
        <Navbar />

        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </AuthContextProvider>
  );
}

export default App;
