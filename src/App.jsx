import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"

import { ContextPrivider } from "./context";

import './styles/common.css';

function App() {

  return (
    <>
      <Header />
      <ContextPrivider>
        <Main />
      </ContextPrivider>
      <Footer />
    </>
  )
}

export default App
