import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Compliance from './pages/Compliance';
import Technology from './pages/Technology';
import About from './pages/About';
// import Contact from './pages/Contact';

const routerBasename =
  import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

function App() {
  return (
    <Router basename={routerBasename}>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
