import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePage from '../src/components/home/home';
import AboutPage from '../src/components/about/about';
import BlogPage from '../src/components/blog/blog';
import{Route} from 'react-router-dom';

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <div className="container">
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Karma&family=Karla&family=Lato:wght@300&display=swap" rel="stylesheet"></link>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/blog" component={BlogPage} />
    </div>
      <footer className="bottom-footer">
      {/* <a className="arrow" href="#projects">
            <FontAwesomeIcon size="6x" icon={['fas', 'angle-double-down']} />
          </a>
        <section id="projects">
          <Projects></Projects>
        </section> */}
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
        <section className="copyright-footer">
          <div className="copyright-footer-item">© 2020 Nagma Kapoor</div>
        </section>
      </footer>
    </div>
  );
}

export default App;
