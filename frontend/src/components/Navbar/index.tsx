import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navibar() {

  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/Klisboa">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/Klisboa</p>
            </div>

          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navibar;