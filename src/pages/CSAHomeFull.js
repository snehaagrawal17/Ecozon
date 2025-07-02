import '../Css/pages/CSAHomeFull.css';

import { useEffect, useState } from 'react';

import CSAHomes from './CSAHomes';
import Footer from '../Component/Footer';

export default function CSAPage() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  
  const banners = [
    {
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Fresh produce delivered from local farms to your table"
    },
    {
      image: "https://images.unsplash.com/photo-1726410622640-5a65bf56b61f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Support sustainable farming practices in your community"
    },
    {
      image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Seasonal, organic vegetables harvested at peak freshness"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="csa-page">
      {/* Rotating Banner */}
      <div 
        className="banner" 
        style={{ backgroundImage: `url(${banners[currentBannerIndex].image})`}}
      >
        <div className="banner-content">
          <h1>Ecozon's Community Supported Agriculture</h1>
          <p className="banner-text">{banners[currentBannerIndex].text}</p>
          <button className="primary-button">Join Our CSA Today</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <section className="about-csa">
          <div className="section-header">
            <h2>What is Community Supported Agriculture?</h2>
          </div>
          
          <div className="about-content">
            <div className="about-image">
              <img src="https://plus.unsplash.com/premium_photo-1664299231810-29d1caf6f753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="CSA harvest basket" />
            </div>
            <div className="about-text">
              <p>Community Supported Agriculture (CSA) creates a direct partnership between farmers and consumers. When you join our CSA, you're purchasing a "share" of our seasonal harvest, delivered fresh to your neighborhood pickup location each week.</p>
              <p>As a CSA member, you'll receive a variety of freshly harvested, locally grown produce throughout the growing season. This model supports local farmers by providing stable income and sharing both the risks and rewards of farming with the community.</p>
              <p>Our sustainable farming practices prioritize soil health, biodiversity, and environmental stewardship. By joining our CSA, you're not just getting the freshest possible produce – you're supporting a more resilient local food system.</p>
            </div>
          </div>
        </section>

        {/* CSA Plans */}
        <section className="csa-plans">
          <div className="section-header">
            <h2>Choose Your CSA Share</h2>
            <p>Select the membership option that fits your household's needs</p>
          </div>
          
          <div>
           <CSAHomes />
          </div>
        </section>

        {/* Video Section */}
        <section className="video-section">
          <div className="section-header">
            <h2>See How CSA Works</h2>
          </div>
          <div className="video-container">
            <iframe 
              width="853" 
              height="480" 
              src="https://www.youtube.com/embed/o_uZSCaUaQY" 
              title="Community Supported Agriculture (CSAs)"  
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <img className="Csadetails" src="https://partselectcom-gtcdcddbene3cpes.z01.azurefd.net/assets/content/19821/from-ground-to-table-community-supported-agriculture.jpg" alt="From the Ground to the Table:" />
      </div>
      <Footer/>
    </div>
  );
}