import { Link, NavLink, useNavigate } from 'react-router-dom';
import { SearchPage } from '../../heroes/pages/SearchPage';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = (props) => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate(); //Este customHook nos permite navegar entre rutas
    const handleLogout = () => {
        navigate('/login', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className='nav-item nav-link text-info'>
                        {user}
                    </span>
                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }

                    >
                        Logout

                    </button>
                </ul>
            </div>
        </nav>
    )
}


