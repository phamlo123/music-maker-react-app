import {Link, useLocation} from "react-router-dom";


const Navigation = () => {
    let path = useLocation().pathname;
    const parts = path.split("/");
    return(
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to="/"
                      className={`nav-link ${parts[1] === ''?'active': ''}`}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/search"
                      className={`nav-link ${parts[1] === 'search'?'active': ''}`}>
                    Search
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/users"
                      className={`nav-link ${parts[1] === 'users'?'active': ''}`}>
                    Users
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/login"
                      className={`nav-link ${parts[1] === 'login'?'active': ''}`}>
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/register"
                      className={`nav-link ${parts[1] === 'register'?'active': ''}`}>
                    Register
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/profile"
                      className={`nav-link ${parts[1] === 'profile'?'active': ''}`}>
                    Profile
                </Link>
            </li>
        </ul>
    )
}

export default Navigation