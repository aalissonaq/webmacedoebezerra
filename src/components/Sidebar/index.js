import { Link, withRouter } from 'react-router-dom';
import { FiUsers, FiHome } from "react-icons/fi";
//import logoCI from '../../assets/CI.png';

const Sidebar = ({ location }) => {
  return (
    <sidebar id="sidebar" className="col-sm-4 col-md-2 h-100 ">
      <div className=" py-3">

        <ul className="p-0 m-0">
          <li className="" >
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <FiHome size="1.5em" style={{ marginRight: '14px' }} />
              <text>Dashdash</text>
            </Link>
          </li>
          <li className="" >
            <Link to="/cliente" className={location.pathname === '/cliente' ? 'active' : ''}>
              <FiUsers size="1.5em" style={{ marginRight: '14px' }} />
              <text>Clientes</text>
            </Link>
          </li>
        </ul>
      </div>

    </sidebar>

  );
};

export default withRouter(Sidebar);
