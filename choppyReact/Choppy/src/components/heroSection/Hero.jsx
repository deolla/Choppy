
import { ReactSVG } from 'react-svg';
import "./Hero.css";
import wave from "../../assets/wave.svg";
import react from "../../assets/react.svg";


const Header = () => {
    return (
        <div className="wave-header">
            <ReactSVG 
                src={wave}
                beforeInjection={(svg) => {
                    svg.classList.add('wave-svg');
                    svg.setAttribute('style', 'width: 100%; height: auto;');
                }}
            />
            <ReactSVG src={react}
                beforeInjection={(svg) => {
                    svg.classList.add('react-svg');
                    svg.setAttribute('style', 'width: 100%; height: auto;');
                }} />
            <h1>Choppy</h1>
        </div>
    );
};

export default Header;
