import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"


const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      {/* <ItemListContainer greeting = {"Step into a Galaxy Far, Far Away and Explore Our Star Wars Universe!"}/> */}
      <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element = { <ItemDetailContainer/> } />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
