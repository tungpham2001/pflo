import React, { useState, useEffect } from 'react';
import CyberneticTree from './CyberneticTree';
import '../style/WorkPage.css';

function WorkPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set up an intersection observer to check if the element is in view
        const observer = new IntersectionObserver((entries) => {
            // We're only interested in the first entry (there should only be one)
            const [entry] = entries;
            // If the element is in view, setIsVisible to true and disconnect the observer
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, {
            // Configure the observer to trigger when the element is fully in view
            threshold: 1.0
        });

        // Start observing the element with the id 'work-container'
        const container = document.getElementById('work-container');
        if (container) {
            observer.observe(container);
        }

        // Clean up the observer on unmount
        return () => {
            if (container) {
                observer.unobserve(container);
            }
        };
    }, []);

    return (
        <div id="work-container" className="workContainer">
            <div className="treeContainer">
                {isVisible && (
                    <div className="digitalTree">
                        <CyberneticTree />
                    </div>
                )}
            </div>
        </div>
    );
}

export default WorkPage;
