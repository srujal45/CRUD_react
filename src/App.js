import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from './components/Navbar'
import Home from './components/Home';

function App() {
  return (
    <>
       <Navbar/>
       <Home/>
    </>
   
  );
}

export default App;
