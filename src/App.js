
import { Routes, Route} from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home'
import Rules from './Pages/RulesPage'
import SingleRule from './Pages/SingleRulePage'

function App() {

  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Rules' element={<Rules/>}/>
      <Route path='/Rules/:id' element={<SingleRule/>}/>
    </Routes>
  
  );
}

export default App;
