
import Products from './Pages/Products'
import Basket from './Pages/Basket'
import { Routes, Route} from 'react-router-dom'

function App() {

  return (

    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/Basket' element={<Basket/>}/>
      
      
    </Routes>
  
  );
}

export default App;
