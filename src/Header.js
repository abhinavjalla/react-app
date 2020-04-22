import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({children})=>{
    return(
        <div>
            <div>
            <h3><Link to='/'>Home</Link></h3>
            <h3><Link to='/jokes'>Jokes</Link></h3>
            </div>
            {children}
        </div>
    )
}

export default Header;