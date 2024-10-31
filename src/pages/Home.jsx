import '../assets/styles/common.css';
import '../assets/styles/home-desktop.css';
import '../assets/styles/home.css';
import logoMask from '../assets/images/logo-mask.svg';
import mistA from '../assets/images/mist001.png';
import mistB from '../assets/images/mist002.png';

export default function Home() {
    return (
    <div id="ok">
        <div className="main-wrap">
            <div className="logo-container">
                <img className="main-logo" src={logoMask} alt="b" />
                <img id="mist-a" className="mist" src={mistA} alt="a" />
                <img id="mist-b" className="mist" src={mistB} alt="e" />
                <div id="mist-scroll"></div>
            </div>
            <div className="safe-cache"></div>
        </div>
        <nav className="main-navigation">
            <menu>
                <li><a href="/play">Jouer</a></li>
                <li><a href="/persos">Fiches Persos</a></li>
            </menu>
        </nav>
    </div>
    )
}