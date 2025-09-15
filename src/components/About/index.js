// Import main SCSS file for styling
import './index.scss'

// Import custom AnimatedLetters component
import AnimatedLetters from '../AnimatedLetters'

// Import React hooks
import { useEffect, useState } from 'react';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNode, faCss, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

// Import loader animation
import Loader from 'react-loaders';

const About = () => {

    // State to control the animation class of letters
    const [ letterClass, setLetterClass] = useState('text-animate');

    // useEffect to change letter animation class after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        // Cleanup the timer when component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        {/* Main container for the About page */}
        <div className="container about-page">

            {/* Text content section */}
            <div className="text-zone">
                <h1>
                    {/* AnimatedLetters component to animate "About Me" text */}
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>

                {/* Paragraphs describing background, experience, and interests */}
                <p>Hello! I am a third-year Bachelor of Science student at the University of Toronto Mississauga, majoring in Computer Science with a minor in Mathematical Sciences and French Studies. I have a strong interest in software design and programming, with hands-on experience in Java, JavaScript, Python, C, HTML, CSS/SCSS, React, Node.js, and SQL. In addition to my technical background, I have obtained my DELF B2 certification in French, showcasing my proficiency in the language and my commitment to continuous learning.</p>

                <p>I am currently involved in several leadership and professional roles on campus. As a Programs and Initiatives Coordinator at the Robert Gillespie Academic Skills Centre, I support student success by coordinating large-scale orientations, producing digital learning resources, and enhancing website usability. I also contribute as an Events Associate for the UTM Mathematical and Computational Sciences Society and as a Mentorship Director for Feed the Future UTM, where I help organize events and mentorship programs that strengthen community and student engagement.</p>

                <p>Outside of my academic and professional pursuits, I enjoy reading, knitting, and baking, which provide me with both creativity and relaxation. I also value spending quality time with my family, which inspires me to approach teamwork with empathy and understanding. Whether through my career in technology, my volunteer work, or my personal interests, I aspire to make a meaningful difference in the lives of others by using my skills to build solutions, foster connections, and empower communities.</p>
            </div>

            {/* 3D rotating cube section */}
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    {/* Each face of the cube displays a different technology icon */}
                    <div className="face1">
                        <FontAwesomeIcon icon={faNode} color="#8CC84B" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div> 
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>

        {/* Loader animation at the bottom of the page */}
        <Loader type="pacman" />
        </>
    );
}

// Export About component as default
export default About;
