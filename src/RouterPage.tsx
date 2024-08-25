import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {LandingPage} from './pages/LandingPage'
import Loader from './components/organisms/loader/Loader'
import ParticlesComponent from "./components/atoms/ParticlesComponent";

const RouterPage = () => {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default RouterPage;