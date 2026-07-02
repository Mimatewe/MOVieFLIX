import Header from './assets/components/Header/Header';
import Banner from './assets/components/Banner/Banner';
import './App.css';
import DisplayRow from './assets/components/DisplayRow/DisplayRow';
import Footer from './assets/components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <DisplayRow />
          </>
        } />
        {/* Fallback for other routes in Header */}
        <Route path="*" element={
          <div style={{ paddingTop: '100px', textAlign: 'center', color: 'white' }}>
            <h1>Page Coming Soon</h1>
            <p>We are working on this feature!</p>
          </div>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
