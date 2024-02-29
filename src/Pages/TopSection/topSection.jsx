import React from 'react';

import { useAuth } from '../../Components/Authentication/AuthContext';
import logo from "../../Assets/logo_croped.png"
import './topsection.css';

const TopSection = () => {
    const { isAuthenticated,logout } = useAuth();
    return(
        <div className='background-image'>
            <div className='topsection'>
                <div>
                    <div className="centered-logo">
                        <img src={logo} alt='' />
                    </div>
                    <div className='motto'>Everything in your pocket</div>
                    <div>
                        {isAuthenticated ? <button className='topsection-button' onClick={() => logout()}><a href='/signin'>Log Out</a></button> : <button className='topsection-button'><a href='/signin'>Log In</a></button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection;