import '../Css/pages/CSAHome.css';

import CSAFarmCard from '../Component/CSAFarmcard';
import React from 'react';
import { farms } from '../Data/Farms';

const CSAHomes = () => {

    // Check if farms data exists
    if (!farms || !Array.isArray(farms)) {
        return (
            <div className="csa-container">
                <p>Loading farms data...</p>
            </div>
        );
    }

    return (
        <div className="csa-container">
            <div className="csa-farms-grid">
                {farms.length > 0 ? (
                    farms.map((farm) => (
                        <CSAFarmCard
                            key={farm.farmId}
                            {...farm}
                        />
                    ))
                ) : (
                    <p>No farms available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default CSAHomes;