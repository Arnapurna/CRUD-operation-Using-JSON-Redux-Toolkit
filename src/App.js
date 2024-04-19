import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Store from './Components/CRUD/Store';
import Home from './Components/CRUD/Home';
import Create from './Components/CRUD/Create';
import Update from './Components/CRUD/Update';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Provider store={Store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/edit/:id" element={<Update />}></Route>
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;
