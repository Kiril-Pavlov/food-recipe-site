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

function App() {
  let links = [
    {linkName:"Home",linkTo:"/"},
    {linkName:"About",linkTo:"about"},
    {linkName:"Recipes",linkTo:"recipes"},
    {linkName:"Favorites",linkTo:"favorites"},
    {linkName:"Blog",linkTo:"blog"},
    {linkName:"Contact",linkTo:"contact"},
  ]

  return (
    <div className="main-app-container">
      <Header links={links}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='recipes' element={<Recipes/>} />
        <Route path='favorites' element={<Favorites/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
