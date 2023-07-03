import styled from 'styled-components';
import {Header} from './components/Header';
import {Menu} from './components/Menu';
import {Footer} from './components/Footer';

const Main = styled.main`
  width: 65%;
  margin: 4rem auto 6rem;
`

const App = () => {
  const footerStyle = {
    backgroundColor: '#edc84b',
    height: '2rem'
  }
  return (
    <>
    <Main>
      <Header />
      <Menu />
      <Footer />
    </Main>
    <footer style={footerStyle}></footer>
    </>
  )
}

export default App
