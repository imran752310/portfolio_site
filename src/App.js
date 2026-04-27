//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import { ThemeProvider } from './ThemeContext';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="page-fade-in">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Portfolio' element={<Portfolio/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
