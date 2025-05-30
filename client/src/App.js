import ReactDOM from 'react-dom/client'

import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const App = ()=>{
  return(
    <div className="main-container">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)

// export default App;
