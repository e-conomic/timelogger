import React from 'react';
import Projects from './views/Projects';
import './style.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

export default App;
