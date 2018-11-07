import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="https://github.com/jedk225/clicky-game">Clicky Game</a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
                <p className="score">Score: {props.score}<span className="sr-only">(current)</span></p>
            </div>
        </div>
    </nav>
)

export default Navbar;