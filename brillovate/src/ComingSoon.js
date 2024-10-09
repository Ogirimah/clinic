import logo from './logo4.svg';
import React from 'react';
import heroImage from './hero-image.png';

const ComingSoon = () => {
    return (
        <div className="coming-soon-page">
            <header className="header">
                <img src={logo} className="app-logo" alt="The Brillovate Clinic Logo" />
                <h1>The Brillovate Clinic</h1>
                <p>Coming Soon</p>
            </header>
            <main className="main">
                <img src={heroImage} alt="Hero Image" />
                <h2>We're almost ready!</h2>
                <p>Stay tuned for our grand opening.</p>
            </main>
            <footer className="footer">
                <p>Follow us on:</p>
                <ul>
                    <li><a href="https://www.facebook.com/yourclinic">Facebook</a></li>
                    <li><a href="https://www.instagram.com/yourclinic">Instagram</a></li>
                    <li><a href="https://www.twitter.com/yourclinic">Twitter</a></li>
                </ul>
                <p>The Brillovate Clinic. Your health, our priority.</p>
            </footer>
        </div>
    );
};

export default ComingSoon;