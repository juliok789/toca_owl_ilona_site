
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import ProductPage from './Pages/ProductPage'


import { Routes, Route} from 'react-router-dom'
import './App.scss'

function App() {

  return (

    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/:id' element={<ProductPage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      
      
      
    </Routes>
  
  );
}

export default App;
