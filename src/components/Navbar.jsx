import Logo from '../assets/MadamLogo.png'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-white py-3">
                <div className="container">
                        <Link to='/'>
                        <img src={Logo} width={120} alt="" /></Link>
                    <ul className="navbar-nav d-flex justify-end">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/products'}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/contact'}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/cart'}>Cart</Link>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-link" to={''}>Profile</Link> */}
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar