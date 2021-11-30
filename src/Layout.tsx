import React from 'react';
import Navigationbar from './components/Navbar';
import Router from './Router';

const Layout = () => {

    return (
        <div>
            <div>
                <div>
                    <Navigationbar />
                </div>
                <div>
                    <Router />
                </div>
            </div>
        </div>
    )
}

export default Layout;