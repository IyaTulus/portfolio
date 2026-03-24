import React from 'react';
import Header from './header/header';
import CursorGlow from './CursorGlow';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-term-bg text-term-base relative overflow-hidden">
            <CursorGlow />
            <Header />
            <div className="max-w-4xl mx-auto pt-32 px-6 pb-20 relative z-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
