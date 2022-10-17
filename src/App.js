import './App.css';
import { Routes, Route } from 'react-router';

//pages
import Home from "./pages/Home/index"
import About from "./pages/About/About"
import Recipes from "./pages/Recipes/Recipes"
import Favorites from "./pages/Favorites/Favorites"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"

//components
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="main-app-container">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='recipes' element={<Recipes/>} />
        <Route path='favorites' element={<Favorites/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
