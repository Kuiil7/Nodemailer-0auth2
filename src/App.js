import React, { Component } from 'react';
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
     <MainContent />  
      <Aboutme />
      <Portfolio />
     
      <ContactForm />
   

      <Footer />
    </div>  
    )
  }
}


export default App
