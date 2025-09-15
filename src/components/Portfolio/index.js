// Import React
import React from 'react';
// Import SCSS for styling
import './index.scss';
// Import loader animation
import Loader from 'react-loaders';
// Import AnimatedLetters component for animated headings
import AnimatedLetters from '../AnimatedLetters';
// Import React hooks
import { useState, useEffect } from 'react';
// Import portfolio data from JSON file
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {
    // State to control the animation class for letters
    const [letterClass, setLetterClass] = useState('text-animate');

    // Log portfolio data to console (for debugging)
    console.log(portfolioData);

    // Change letter animation class after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Cleanup timer on component unmount
        return () => { clearTimeout(timer); }
    });

    // Function to render the portfolio items
    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {portfolio.map((port, idx) => {
                    return (
                        <div className="image-box" key={idx}>
                            {/* Portfolio image */}
                            <img src={port.cover} className="portfolio-image" alt="portfolio" />
                            <div className="content">
                                {/* Portfolio title */}
                                <p className="title">{port.title}</p>
                                {/* Portfolio description */}
                                <h4 className="description">{port.description}</h4>
                                {/* Button to open portfolio URL */}
                                <button className="btn" onClick={() => window.open(port.url)}>
                                    View
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <>
        {/* Main container for Portfolio page */}
        <div className="container portfolio-page">
            {/* Animated page title */}
            <h1 className='page-title'>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split('')}
                    idx={15}
                />
            </h1>

            {/* Render portfolio items */}
            <div>
                {renderPortfolio(portfolioData.portfolio)}
            </div>
        </div>

        {/* Loader animation at bottom */}
        <Loader type="pacman" />
        </>
    );
}

// Export Portfolio component as default
export default Portfolio;
