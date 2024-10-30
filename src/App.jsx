import { useEffect, useState } from 'react'
import './scss/Core.scss'
import './scss/App.scss'
import Api from './services/Api';

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
  
  },[])

  if (loading) {
    return (
      <div className='loader'>
        <img src="https://tf-frontend.netlify.app/images/v1/logo.svg" alt="Terra Logo" />
      </div>
    );
  }

  return (
    <>
    </>
  )
}

export default App
