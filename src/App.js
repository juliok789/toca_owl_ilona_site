
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import SingleProductPage from './Pages/SingleProductPage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegPage'
import './components/ui/buttons.scss'


import { Routes, Route} from 'react-router-dom'
import './App.scss'

function App() {

  return (

    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/:id' element={<SingleProductPage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/RegPage' element={<RegisterPage/>}/>
      
      
      
    </Routes>
  
  );
}

export default App;
