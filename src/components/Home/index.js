// Import Link for routing
import { Link } from 'react-router-dom';
// Import logo image
import LogoTitle from '../../assets/images/logo-s.png';
// Import SCSS for styling
import './index.scss';
// Import Logo component
import Logo from './Logo';
// Import React hooks
import { useEffect, useState } from 'react';
// Import AnimatedLetters component for text animation
import AnimatedLetters from '../AnimatedLetters';
// Import loader animation
import Loader from 'react-loaders';

const Home = () => {

    // State to control the animation class for letters
    const [ letterClass, setLetterClass] = useState('text-animate');

    // Arrays for name and job text to animate
    const nameArray = ['o', 'm', 'e', 's', 'a'];
    const jobArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'S', 'c', 'i', 'e', 'n', 'c', 'e', ' ', 'S', 't', 'u', 'd', 'e', 'n', 't', '.'];

    // Change animation class after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        {/* Main container for Home page */}
        <div className="container home-page">

            {/* Text zone with animated heading */}
            <div className="text-zone">
                <h1>
                    {/* Static letters with animation class */}
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    {/* Logo image in the heading */}
                    <img src={LogoTitle} alt="Computer Science Student" />
                    {/* Animated letters for name */}
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    {/* Animated letters for job */}
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={11} />
                </h1>

                {/* Short description */}
                <h2>A portfolio website built with React to showcase my projects and skills.</h2>

                {/* Link to Contact page */}
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>

            {/* Logo component (likely animated or styled logo) */}
            <Logo />
        </div>

        {/* Loader animation at the bottom */}
        <Loader type="pacman" />
        </>
    )
};

export default Home;
