import './App.css'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <ItemListContainer props={'Bienvenidos'} />
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)} />
      </div>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/product/:id' element={<ItemDetailContainer />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App