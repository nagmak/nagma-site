import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SimpleBreadcrumbs from '../src/components/breadcrumbs/breadcrumb';
import LongMenu from '../src/components/hamburger-menu/hamburger-menu';

function IndexPage() {
    return (
        <div>
            <App/>
            <LongMenu></LongMenu>
            <SimpleBreadcrumbs></SimpleBreadcrumbs>
        </div>
    );
}
export default IndexPage;

ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
