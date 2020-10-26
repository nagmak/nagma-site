import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Emoji from '../emoji/emoji';

library.add(fab, fas);

function HomePage() {
    return (
        <header className="App-header">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
            <h1>Hi, I'm Nagma!</h1>
            <h3 class="about-me"><Emoji symbol="👩🏻‍💻" label="woman-dev"/>Software Developer at IBM.</h3>
            <h3 class="about-me">When I'm not coding, I like to <a href="https://www.instagram.com/nagmak__/">write <Emoji symbol="✍🏼" label="writing"/>
            </a> and take <a href="https://www.instagram.com/notnagma/">photos <Emoji symbol="📷" label="camera"/></a>!</h3>
        </header>
    )
}
export default HomePage;