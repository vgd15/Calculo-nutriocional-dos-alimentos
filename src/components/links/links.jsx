import React from "react";
import './links.css';
import { Link } from 'react-router-dom'


function Links() {
    return (
        <div className="Links">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Links;