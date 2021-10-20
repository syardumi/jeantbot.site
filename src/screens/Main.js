import { Container } from 'react-bootstrap';
import { Header } from '../components'

function Main() {

  return (
    <div className="Main">
      <Header />
      <Container>
        <div style={{flexDirection: 'row', display: 'flex'}}>
        </div>
      </Container>
    </div>
  )
}

export { Main };
