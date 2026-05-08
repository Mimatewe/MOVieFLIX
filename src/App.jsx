import { useState } from 'react'
import Header from './assets/components/Header/Header';
import Banner from './assets/components/Banner/Banner';
import './App.css';
import DisplayRow from './assets/components/DisplayRow/DisplayRow';
import Footer from './assets/components/Footer/Footer';




function App() {


  return (
    <>
  <Header/>
  <Banner/>
  <DisplayRow/>
  <Footer />
    </>
  )
}

export default App
