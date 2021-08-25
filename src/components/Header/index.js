import logo from './../../assets/logoBgLight.png';
import { FiBell, FiPower } from "react-icons/fi";

const Header = () => {
  return (
    <header className="container-fluid d-flex justify-content-between shadow " >
      <div className="d-flex align-items-center">

        <img src={logo} className="img-fluid" alt="logo_Madedo&Bezerra" />

      </div>
      <div className="d-flex align-items-center">
        <div className="text-right mx-4">

          <span className="d-flex m-0 p-0 " id="nomeUser"> Macedo&Bezerra</span>
          <small className="m-0 p-0 " id="saudacaoUser">Tenha um bom dia</small>
        </div>
        <div className="text-right mr-3">
          <FiBell className="mx-3" style={{ fontSize: '1.8em', color: '#1B1E4B', margin: '10px' }} />
          <FiPower className="mr-2" style={{ fontSize: '2em', color: 'red', margin: '10px' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
