import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Emoji from '../emoji/emoji';
import './home.css';
// import AlternateTimeline from '../timeline/timeline';

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
                <h3 className="about-me">I enjoy the creative process and love collaborating with my clients to produce beautiful things. I strives to create clean, thoughtful design that is rich in physical objects and well-crafted media. I run a design newsletter where I teach design best practices. I love fashion, interior design and architecture.</h3>
                <h3 className="about-me">My love for design comes from my passion for the arts and how they create a beautiful life. After graduating from NYU, I honed my skills while working at some of the top design shops in New York City. Now, I'm ready to help clients create modern spaces with unique style.</h3>
                </div>
            </div>

        </header>
        </div>
    )
}
export default HomePage;