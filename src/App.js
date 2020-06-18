import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import JoinUs from './Components/Register';
import Footer from './Components/FooterNav';
import Navbar from './Components/Navbar';
import Blogpage from './Components/Blogpage';
import SingleBlog from './Components/Singleblog';
import SubmitBlog from './Components/SubmitBlog';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/join" component={JoinUs} />
      <Route path="/blog" component={Blogpage} />
      <Route path="/singleblog/:id" component={SingleBlog} />
      <Route path="/submitblog" component={SubmitBlog} />
      <Footer />
    </div>
  );
}

export default App;
