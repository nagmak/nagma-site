import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePage from '../src/components/home/home';
import AboutPage from '../src/components/about/about';
import Blog from '../src/components/blog/blog';
import BlogList from '../src/components/blog/blogList';
import{Route} from 'react-router-dom';

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <header className="container">
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Karma&family=Karla&family=Lato:wght@300&display=swap" rel="stylesheet"></link>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/blog" component={BlogList}/>
      <Route path="/post/:slug" component={Blog} />
    </header>
      <footer className="bottom-footer">
      {/* <a className="arrow" href="#projects">
            <FontAwesomeIcon size="6x" icon={['fas', 'angle-double-down']} />
          </a>
        <section id="projects">
          <Projects></Projects>
        </section> */}
        <section className="contact">
        <a className="font-brand github" href="https://github.com/nagmak">
            <FontAwesomeIcon size="3x" icon={['fab', 'github']} />
          </a>
          <a className="font-brand linkedin" href="https://www.linkedin.com/in/nagmakapoor/">
            <FontAwesomeIcon size="3x" icon={['fab', 'linkedin']} />
          </a>
          <a className="font-brand mail" href="mailto:nagmakapoor@gmail.com">
            <FontAwesomeIcon size="3x" icon={['fas', 'envelope']} />
          </a>
        </section>
        <section className="copyright-footer">
          <div className="copyright-footer-item">Built with 🤍</div>
          <div className="copyright-footer-item">Nagma Kapoor © 2023 </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
