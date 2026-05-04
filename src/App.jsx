import Cursor      from './components/Cursor'
import Nav         from './components/Nav'
import Hero        from './components/Hero'
import Ticker      from './components/Ticker'
import Nosotros    from './components/Nosotros'
import MenuSection from './components/MenuSection'
import Reviews     from './components/Reviews'
import Ubicacion   from './components/Ubicacion'
import Pedir       from './components/Pedir'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Nosotros />
        <MenuSection />
        <Reviews />
        <Ubicacion />
        <Pedir />
      </main>
      <Footer />
    </>
  )
}
