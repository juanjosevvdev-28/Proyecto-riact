import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:itemId" element={<ItemDetailContainer />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
