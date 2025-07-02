import './App.css'
import Chat from './components/Chat'
import ParticipacionCard from './components/participacionCard'
import EmocionalCard from './components/emocionalCard'
import ClaridadCard from './components/claridadCard'
import DecicionesCard from './components/decicionesCard'
import SugerenciasIaCard from './components/sugerenciasIaCard'
import Componente1 from './components/componente1'

function App() {
  return (
    <div className='flex'>
      <Chat />
      <div className='overflow-y-scroll h-dvh'>
        <Componente1 />
        <ParticipacionCard />
        <EmocionalCard />
        <ClaridadCard />
        <DecicionesCard />
        <SugerenciasIaCard />
      </div>
    </div>
  )
}

export default App
