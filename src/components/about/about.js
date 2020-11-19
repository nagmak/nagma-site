import React from 'react';
import './about.css';

function AboutPage() {
    return (
        <div className="about-page">
            <header className="about-page-header">
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <img className="about-page-icon" src="worknagma.JPG" alt="Nagma"/>
            <div className="about-page-text">
                <p className="about-page-para">It has been a long journey arriving here. I was born in India, grew up sailing on ships, then on shore in Singapore, Canada and USA. I identify with the experiences of being a Third Culture Kid and love to rattle on about this at random.</p>
                <p className="about-page-para">Learning about other cultures and deep-diving into human experiences is what I enjoy the most. In my free time, I like to write poetry, short stories, read and take photos. Also a bit of a fitness junkie when stars align.</p>
                <p className="about-page-para">Currently, I work at IBM Canada - Data Security as a Full-Stack Developer using React, Node and Go.</p>
            </div>
            </header>
        </div>
    )
}

export default AboutPage;