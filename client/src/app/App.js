import React from 'react';
import Projects from './views/Projects';
import './style.css';

export default function App() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">Timelogger</a>
                    </div>
                </nav>
            </header>
            
            <main>
                <div className="container">                      
                    <Projects />
                </div>
            </main>
        </>
    );
}
