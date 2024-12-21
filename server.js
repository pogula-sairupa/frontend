import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Spotify Clone</h1>
            <ul className="flex space-x-4">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/library" className="hover:underline">Library</Link></li>
                <li><Link to="/search" className="hover:underline">Search</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;