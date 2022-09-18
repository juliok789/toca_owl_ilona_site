
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import SingleProductPage from './Pages/SingleProductPage'


import { Routes, Route} from 'react-router-dom'
import './App.scss'

function App() {

  return (

    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/:id' element={<SingleProductPage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      
      
      
    </Routes>
  
  );
}

export default App;
