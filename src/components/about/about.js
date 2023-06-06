import React from 'react';
import './about.css';

function AboutPage() {
    return (
        <div className="about-page">
            <header className="about-page-header">
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <img className="about-page-icon" src="worknagma2.JPG" alt="Nagma"/>
            <div className="about-page-text">
                <p className="about-page-para">It has been a long journey arriving here. I was born in India, grew up sailing on ships, then on shore in Singapore, Canada and USA. I identify with the experiences of being a Third Culture Kid and love to rattle on about this at random.</p>
                <p className="about-page-para">Learning about other cultures and deep-diving into human experiences is what I enjoy the most. In my free time, I like to write poetry, short stories, read and take photos. Also a bit of a fitness junkie when stars align.</p>
                <p className="about-page-para">I've extensively used Next.js, React.js with TypeScript/JavaScript in the past 5+ years, and I also enjoy digging around the backend and server side with Node.js, Golang, and a variety of SQL and noSQL databases. I also have over a year of experience using the Amazon AWS ecosystem.</p>
                <p className="about-page-para">Currently, I'm actively looking for new opportunities as a full stack software engineer.</p>
            </div>
            </header>
        </div>
    )
}

export default AboutPage;