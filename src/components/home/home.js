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
            <img className="icon-image" src="nagmacartoon2.JPG" alt="Nagma"/>
            <h1 className="name-header">Hi, I'm Nagma!</h1>
            <h3 className="about-me"><Emoji symbol="👩🏻‍💻" label="woman-dev"/>software engineer @ twali. I'm exploring<span role="img" aria-label="plant">🌱</span> web3 right now.</h3>
            <h3 className="about-me">When I'm not coding, I like to write <Emoji symbol="✍🏼" label="writing"/> and take photos <Emoji symbol="📷" label="camera"/></h3>
        </header>
        </div>
    )
}
export default HomePage;