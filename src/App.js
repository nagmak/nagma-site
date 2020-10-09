import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Projects from './components/projects/projects'
import Emoji from './components/emoji/emoji'

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
        <h1>Hi, I'm Nagma!</h1>
        <h3 class="about-me"><Emoji symbol="👩🏻‍💻" label="woman-dev"/>Software Developer at IBM. Computer Science student at Ryerson University.</h3>
        <h3 class="about-me">When I'm not coding, I like to <a href="https://www.instagram.com/nagmak__/">write <Emoji symbol="✍🏼" label="writing"/>
</a> and take <a href="https://www.instagram.com/notnagma/">photos <Emoji symbol="📷" label="camera"/></a>!</h3>
      </header>
      <body>
      <a className="arrow" href="#projects">
            <FontAwesomeIcon size="6x" icon={['fas', 'angle-double-down']} />
          </a>
        <section id="projects">
          <Projects></Projects>
        </section>
        <section className="contact">
          <a className="font-brand" href="https://twitter.com/notnagma">
            <FontAwesomeIcon size="3x" icon={['fab', 'twitter']} />
          </a>
          <a className="font-brand" href="https://www.linkedin.com/in/nagmakapoor/">
            <FontAwesomeIcon size="3x" icon={['fab', 'linkedin']} />
          </a>
          <a className="font-brand" href="mailto:nagmakapoor@gmail.com">
            <FontAwesomeIcon size="3x" icon={['fas', 'envelope']} />
          </a>
        </section>
      </body>
    </div>
  );
}

export default App;
