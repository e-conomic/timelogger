import * as React from "react";
import Projects from "./views/Projects";
import "./style.css";

export default function App() {
    return (
        <>
            <header className="bg-gray-900 text-white flex items-center h-12 w-full">
                <div className="container mx-auto">
                    <a className="navbar-brand" href="/">
                        Timelogger
                    </a>
                </div>
            </header>

            <main>
                <div className="container mx-auto">
                    <Projects />
                </div>
            </main>
        </>
    );
}
