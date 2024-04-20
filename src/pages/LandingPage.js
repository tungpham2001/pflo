
import '../style/LandingPage.css';
import '@fortawesome/fontawesome-free/css/all.css';

function LandingPage() {
    return (
        <div className="landingContainer">
            <div className="leftPortion">
                <div className="name">
                    <h1>Tung</h1>
                    <h1>Pham.</h1>
                    <div className="highlight"></div>
                </div>
                <div className="socialContainer">
                    <a href="https://github.com/tungpham2001" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/tung-pham-1b01571b7/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="rightPortion">
                <div className="occupation">
                    <h1>Software Engineer & Web Developer</h1>
                </div>
                <div className="introduction">
                    <h1>Passionate about innovation and efficient problem-solving, based in Toronto.</h1>
                </div>
                <div className="aboutMeContainer">
                    <button>About Me</button>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;