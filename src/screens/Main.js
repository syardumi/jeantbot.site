import { Container } from 'react-bootstrap';
import { Header } from '../components'

function Main() {

  return (
    <div className="Main">
      <Header />
      <Container>
        <div style={{flexDirection: 'row', display: 'flex'}}><h2>Welcome to the land of Jeant</h2>
        </div>
      </Container>
    </div>
  )
}

export { Main };
