import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="">
            <nav className="navbar navbar-light sticky-top navbar-expand-sm d-flex justify-content-between">
                <div className="container">
                    <span className="m-4 MenuSpan">&#9776; Menu</span>
                    <Link className="navbar-brand" to="/">
                        <h3>Madam&lsquo;s Boutique</h3>
                    </Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId">
                        <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse text-center flex-grow-0" id="collapsibleNavId">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/Products' className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
