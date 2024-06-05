import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <header>
                {/* Your header content */}
            </header>
            <main>
                <Outlet /> {/* This will render the matched child route's element */}
            </main>
            <footer>
                {/* Your footer content */}
            </footer>
        </div>
    );
}
export default Layout;
