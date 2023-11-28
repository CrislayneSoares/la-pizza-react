import './App.css'
import Banner from './components/banner/Banner'
import Cardapio_card from './components/cardapio-card/Cardapio-card'
import Cover from './components/cover/Cover.jsx'
import { createGlobalStyle } from 'styled-components'

function App() {

  const EstiloGlobal = createGlobalStyle `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Sora', sans-serif;
    }
  `
  return (
    <>
      <EstiloGlobal/>
      <header>
        <Cover></Cover>
      </header>
      <main>
        <h2>Mais vendidos</h2>
        <section className='container__cardapio'>
          <Cardapio_card
            imgUrl={"/src/assets/la-cuma.png"}
            title={"La Cuma"}
            price={"23"}
          ></Cardapio_card>
          <Cardapio_card
            imgUrl={"/src/assets/la-menta.png"}
            title={"La Menta"}
            price={"24"}
          ></Cardapio_card>
          <Cardapio_card
            imgUrl={"/src/assets/la-bana.png"}
            title={"La Bana"}
            price={"25"}
          ></Cardapio_card>
          <Cardapio_card
            imgUrl={"/src/assets/margarita.png"}
            title={"La Toca"}
            price={"26"}
          ></Cardapio_card>
        </section>
        <Banner></Banner>
      </main>
      <footer>
        <p>© todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App
