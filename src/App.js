import './App.css';
import { Allroutes } from './Component/allroutes';
import { Form } from './Component/From';
import { store } from './Redux/store';
import {useSelector} from 'react-redux'
import { Navbar } from './Component/Navbar';


function App() {



  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
    </div>
  );
}

export default App;
