import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CoffeeList from './composants/CoffeeList';
import AddCoffee from './composants/AddCoffee';
import UpdateCoffee from './composants/UpdateCoffee';

function App() {
  return (
    <div className="App">
      <h1>Star Coffee List</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CoffeeList />} />
      <Route path='/add-coffee' element={<AddCoffee />} />
      <Route path='/update-coffee/:id' element={<UpdateCoffee />} />

      </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
