import Layout from './components/Layout'
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Cinema from './components/Cinema'
import MisTrabajos from './components/MisTrabajos'
import Contacto from './components/Contacto'
import CitaPrevia from './components/CitaPrevia'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <SobreMi />
      <Cinema />
      <MisTrabajos />
      <CitaPrevia />
      <Contacto />
    </Layout>
  )
}
