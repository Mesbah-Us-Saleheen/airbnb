import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data.js'
import './App_custom.css'
// import './App.css'

function App() {

  const cards = data.map(item => {
    return(
      <Card
        {...item} //spread syntax in object literals
      />
    )
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}

export default App
