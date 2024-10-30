import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/Core.scss';
import './scss/App.scss';
import Api from './services/Api';
import Navbar from './components/Navbar';
import Story from './components/Story';
import Landing from './components/Landing';

function App() {
  const [navbarData, setNavbarData] = useState(null);
  const [heroData, setHeroData] = useState(null);
  const [bodyData, setBodyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Api();
        setNavbarData(data.navbar);
        setHeroData(data.hero);
        setBodyData(data.body);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <img
          src="https://tf-frontend.netlify.app/images/v1/logo.svg"
          alt="Terra Logo"
        />
      </div>
    );
  }

  return (
    <>
      <Navbar navbar={navbarData} />
      <Routes>
        <Route path='/' element = {<Landing hero={heroData} body={bodyData}/>} />
        <Route path='/story' element = {<Story/>} />
      </Routes>
    </>
  );
}

export default App;
