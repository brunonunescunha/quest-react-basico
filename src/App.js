import { Card } from './components/card/card'
import { Button } from './components/button/button'

function App() {
  return (
    <>
      <Card paragraphs=" Quest do React básico, faz uma apresentação na tela usando um parágrafo!" />

      <Button />

      <Card color="#9500ff" paragraphs="Quest do React básico capítulo 2, faz uma apresentação na tela usando um parágrafo!" />

      <Button texButton="Botão não tem link"/>
    </>
  )
}

export default App
