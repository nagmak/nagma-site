import React from 'react';
import './about.css';

function AboutPage() {
    return (
        <div className="about-page">
            <header className="about-page-header">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
            <img className="about-page-icon" src="worknagma.JPG" alt="Nagma"/>
            <div className="about-page-text">
                <p className="about-page-para">Nagma is a Software Developer based out of Toronto. She was born in India, grew up sailing on ships, then on shore in Singapore, Canada and USA. She identifies with the experiences of being a Third Culture Kid and loves to rattle on about this at random.</p>
                <p className="about-page-para">In her free time, she likes to write poetry, short stories, read and take photos. She’s also a bit of a fitness junkie when stars align.</p>
                <p className="about-page-para">Currently, she works at IBM Canada - Data Security as a Full-Stack Developer using React, Node and Golang.</p>
            </div>
            </header>
        <body>

        </body>
        </div>
    )
}

export default AboutPage;