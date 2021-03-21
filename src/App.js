import React, {useState , useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/about';
import Menu from './pages/menu';

function App() {

  const [isopen, setIsOpen] = useState(false);

  const toggle = () =>{
    setIsOpen(!isopen)
  }

  useEffect(() => {
    
    const hideMenu = () =>{
      if(window.innerWidth >768 && isopen ){
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu);

    return () =>{
      window.removeEventListener('resize', hideMenu)
    }
    
  })

  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isopen={isopen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/menu' component={Menu} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
