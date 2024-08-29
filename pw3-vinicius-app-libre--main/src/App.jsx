/* IMPORTA O CSS */
import './App.css'

//IMPORTA O COMPONENTE CONTAINER
import Container from './components/layout/Conteiner'

//IMPORTA O COMPONENTE NAVBAR
import NavBar from './components/layout/NavBar'

//IMPORTA O COMPONENTE DE PAG HOME
import Home from './components/pages/Home'


//IMPORTA A IMAGEM DA CAPA DO LIVRO
import capaLivro from './assets/cavernas_aco.jpg'
 
function App() {
 
 
  return (
    <>
    
      <NavBar></NavBar>
      <Container>
        <Home/>
      </Container>

    </>
  )
}
 
export default App