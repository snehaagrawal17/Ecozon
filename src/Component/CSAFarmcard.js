import '../Css/components/CSAFarmCard.css';

import CSAFarmCarousel from './CSAFarmCarousel';
import { Link } from 'react-router-dom';
import React from 'react';

function CSAFarmCard({ farmId, name, images, price, description, sustainability }) {
    return (
        <div className="csa-farm-card">
            <div className="farm-badge">Eco-Friendly</div>

            <CSAFarmCarousel images={images} farmName={name} />

            <div className="farm-info">
                <h2>{name}</h2>
                <div className="sustainability-score">
                    {Array(sustainability)
                        .fill()
                        .map((_, i) => (
                            <span key={i} className="leaf-icon">🌱</span>
                        ))}
                </div>
                <p className="farm-description">{description}</p>
                <div className="price-section">
                    <span className="price-label">Starting from</span>
                    <span className="price-amount">
                        <small>$</small>
                        <strong>{price}</strong>
                    </span>
                </div>
            </div>

            <Link to={`/farm/${farmId}`} className="subscribe-button">
                View Farm Details
            </Link>
        </div>
    );
}

export default CSAFarmCard;