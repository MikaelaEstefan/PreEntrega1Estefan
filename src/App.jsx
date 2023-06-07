import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = {"Step into a Galaxy Far, Far Away and Explore Our Star Wars Universe!"}/>
    </div>
  )
}

export default App
