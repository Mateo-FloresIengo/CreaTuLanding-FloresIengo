import './App.css'
import Navbar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer props={'Bienvenidos'}/>
    </>
  )
}

export default App
