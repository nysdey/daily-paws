import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// BrowserRouter: the main component that wraps the entire app and enables routing
// Routes: groups all <Route> componenet
// Route: defines a path and the component that should render when the path matches
import Home from "./components/pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;