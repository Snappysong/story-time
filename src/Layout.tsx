import React from 'react';
import Menu from './Menu';
import Router from './Router';

const Layout = () => {

    return (
        <div>
            <div>
                <div>
                    <Menu />
                </div>
                <div>
                    <Router />
                </div>
            </div>
        </div>
    )
}

export default Layout;