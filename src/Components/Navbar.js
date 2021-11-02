import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'


export class Navbar extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Newsmonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link  active" aria-current="page" to="/">Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <link  className="nav-link " to="/">About</a>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link " to="/business">Business</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/entertainment">Entertainment</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/sceince">Sceince</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/technology">Technology</Link>
                                </li>

                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link  dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" to="#">Action</a></li>
                                        <li><a className="dropdown-item" to="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" to="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  disabled">Disabled</a>
                                </li> */}
                            </ul>
                            {/* <form classNames="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
