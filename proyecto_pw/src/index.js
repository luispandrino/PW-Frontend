import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/menu/menu';
import Main from './components/main/main';
import Footer from './components/footer/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <>
    <Menu />
    <main>
      <div>
        <Main />
      </div>
    </main>
    <footer>
    <Footer />
    </footer>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
