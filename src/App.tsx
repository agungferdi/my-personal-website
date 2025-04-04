import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App