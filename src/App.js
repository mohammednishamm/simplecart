import logo from './logo.svg';
import './App.css';
import { Home1 } from './component/Home1';
import TodoApp from './component/Todo';
import { Men } from './component/Men';
import { Navbar } from './component/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Nisam } from './component/Nisam';
import Cart from './component/Cart';
import Product from './component/Product';
import { Shopcontextprovider } from './component/Shopcontext';

function App() {
  return (
    <div className="App">
      <Shopcontextprovider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route index element={<Product/>}/>


          <Route path='/Cart' element={<Cart/>}/>
          </Route>
       </Routes>
       
       </BrowserRouter>
       </Shopcontextprovider>
    </div>
  );
}

export default App;
