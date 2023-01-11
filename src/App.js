
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import Footer from './Pages/Footer';
import About2 from './About/About2';



function App() {
  return (
    <div className='App'>
      <Menu></Menu>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/a' element={<About2></About2>}></Route>
       
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
