import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/dashboard"
import About from "./pages/about"
import Contact from "./pages/contact"
function App() {
  return (
    <div>
      <Sidebar>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
         <Route path='/contact' element={ <Contact/>} />
      </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
