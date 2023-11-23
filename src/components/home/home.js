import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './home.css';

library.add(fab, fas);

function HomePage() {
    return (
        <div className="homepage-container">
        <header className="App-header">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"/>
            <h1 className="vertical-name-header">Hello,</h1>
            <img className="icon-image" src="worknagma2.JPG" alt="Nagma"/>
            <div className='content'>
                <div className="name-header-container">
                <h1 className="name-header">I'm Nagma &</h1>
                <h1 className="name-header">I'm a Full Stack Engineer</h1>
                </div>
                <div className="about-me-container">
                <h3 className="about-me">Currently, I am a Software Engineer at theScore, building on the Retail team. I've extensively used Next.js, React.js with TypeScript/JavaScript in the past 3+ years.</h3>
                <h3 className="about-me">I also enjoy digging around the backend and server side with Node.js, Golang, and a variety of SQL and noSQL databases. I also have over a year of experience using the Amazon AWS ecosystem.</h3>

                </div>
            </div>
        </header>
        </div>
    )
}
export default HomePage;