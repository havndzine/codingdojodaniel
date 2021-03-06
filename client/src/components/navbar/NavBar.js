import React from 'react';
import './navbar.css';
import {Link} from '@reach/router';


const NavBar = (props) => {

    const {id} = props;

    return (
        <header>
            <div class="topnav">
                <div>
                    <Link to="/users"><h2>Create User</h2></Link>
                </div>
                <div>
                    <Link to="/"><h2>Dashboard</h2></Link>
                </div>
                <div>
                    <Link to={`/users/${id}`}><h2>Profile</h2></Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar;