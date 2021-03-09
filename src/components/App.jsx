import React from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import Features from './Features';
import ITC1 from './ITC1';

import ReasonSection from './ReasonSection';
import CustReviews from "./Reviews";
import Map from "./Map";
import Footer from './Footer';

function App() {
    return (
        <div>
            <Navbar />
            <Header />
            <Features />
            <ITC1 />
            <ReasonSection />
            <CustReviews />
            <Map />
            <Footer />
        </div>
    );
}
export default App;


