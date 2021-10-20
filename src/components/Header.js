import { Nav, Navbar } from 'react-bootstrap';

function Header(props) {

  return (
    <div className="Header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">&nbsp;&nbsp;&nbsp;<img
              alt=""
              src="/JeantBot-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />&nbsp;&nbsp;JeantBot</Navbar.Brand>
        <Nav style={{flex: 0.95}} className="justify-content-end">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="https://github.com/syardumi/jeantbot">Twitch Bot</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/twitch">Sound Effects</Nav.Link></Nav.Item>
          {props.children}
        </Nav>
      </Navbar>
    </div>
  )
}

export { Header };
