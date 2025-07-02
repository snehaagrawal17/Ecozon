import 'react-toastify/dist/ReactToastify.css';

import React, { createContext, useContext, useState } from 'react';

import { toast } from 'react-toastify';

// Create the context
const ReturnBoxContext = createContext();

// Export the hook for using the context
export const useReturnBox = () => useContext(ReturnBoxContext);

export const ReturnBoxProvider = ({ children }) => {
    const [returnBoxCount, setReturnBoxCount] = useState(0);
    const [scheduledPickups, setScheduledPickups] = useState([]);
    const [pendingProducts, setPendingProducts] = useState([]);

    const addReturnBox = (product) => {
        const newCount = returnBoxCount + 1;
        setReturnBoxCount(newCount);

        if (newCount === 5) {
            // Schedule pickup when 5th box is selected
            const pickupDate = new Date();
            pickupDate.setDate(pickupDate.getDate() + 3); // Pickup in 3 days

            const allProducts = [...pendingProducts, product];
            const totalGreenBits = allProducts.reduce((sum, p) => sum + (p.greenBits || 25), 0);
            const totalTreesPlanted = allProducts.reduce((sum, p) => sum + (p.treesPlanted || 0.05), 0);
            const totalCarbonSaved = allProducts.reduce((sum, p) => sum + (p.carbonSaved || 0.8), 0);

            const newPickup = {
                id: Date.now(),
                status: 'scheduled',
                date: pickupDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }),
                products: allProducts,
                totalGreenBits,
                totalTreesPlanted,
                totalCarbonSaved
            };

            setScheduledPickups([...scheduledPickups, newPickup]);
            setPendingProducts([]); // Clear pending products
            setReturnBoxCount(0); // Reset counter

            toast.success('Pickup scheduled! Our courier will collect your boxes in 3 days.', {
                position: 'top-right',
                autoClose: 5000,
            });

            return true;
        } else if (newCount < 5) {
            // Add to pending products
            setPendingProducts([...pendingProducts, product]);

            toast.info(`Box added! ${5 - newCount} more boxes needed to schedule pickup.`, {
                position: 'top-right',
                autoClose: 3000,
            });

            return false;
        }
    };

    return (
        <ReturnBoxContext.Provider value={{
            returnBoxCount,
            scheduledPickups,
            pendingProducts,
            addReturnBox,
            boxesNeeded: Math.max(0, 5 - returnBoxCount)
        }}>
            {children}
        </ReturnBoxContext.Provider>
    );
};


export { ReturnBoxContext };