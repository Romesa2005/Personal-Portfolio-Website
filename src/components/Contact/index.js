// Import loader animation
import Loader from 'react-loaders';
// Import SCSS for styling
import './index.scss';
// Import AnimatedLetters component for animated headings
import AnimatedLetters from '../AnimatedLetters';
// Import React hooks
import { useEffect, useState, useRef } from 'react';
// Import EmailJS for sending form data
import emailjs from '@emailjs/browser';
// Import components for the map
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {

    // State to control animation class for letters
    const [letterClass, setLetterClass] = useState('text-animate');
    // Ref for the contact form to send with EmailJS
    const refForm = useRef();

    // Change letter animation after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    
        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    // Function to send form data via EmailJS
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'gmail', // EmailJS service ID
                'template_ki2a49r', // EmailJS template ID
                refForm.current, // Form reference
                'Foche7UKjfIlb-CuO' // Public API key
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            )
    }

    return (
        <>
        {/* Main container for Contact page */}
        <div className="container contact-page">

            {/* Text content and form section */}
            <div className='text-zone'>
                <h1>
                    {/* Animated heading "Contact Me" */}
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15} 
                    />
                </h1>
                <p>
                    Looking forward to connecting with you!
                </p>

                {/* Contact form */}
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            {/* Name input */}
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>

                            {/* Email input */}
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>

                            {/* Subject input */}
                            <li>
                                <input type="text" name="subject" placeholder='Subject' required />
                            </li>

                            {/* Message textarea */}
                            <li>
                                <textarea name="message" placeholder='Message' required></textarea>
                            </li>

                            {/* Submit button */}
                            <li>
                                <input type="submit" className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            {/* Contact information section */}
            <div className='info-map'>
                Romesa Khan,
                <br />
                Canada,
                <br />
                University of Toronto,
                <br />
                <span>rms.khan@mail.utoronto.ca</span>
            </div>

            {/* Map section using react-leaflet */}
            <div className='map-wrap'>
                <MapContainer center={[43.550746, -79.664188]} zoom={10}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[43.550746, -79.664188]}>
                        <Popup>
                            Romesa Khan's Location<br />University of Toronto
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>

        {/* Loader animation at bottom of page */}
        <Loader type="pacman"/>
        </>
    )
}

// Export Contact component as default
export default Contact;
