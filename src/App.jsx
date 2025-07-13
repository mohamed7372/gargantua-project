/** @format */

import { Suspense } from "react";
import "./styles/globals.css";

import { Routes, Route } from "react-router-dom";
import ConceptFibre from "./pages/ConceptFibre";
import Home from "./pages/Home";
import HomeLayout from "./layout/HomeLayout";
import ConceptEnergy from "./pages/ConceptEnergy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center">
                    Loading...
                </div>
            }
        >
            <div className="min-h-screen bg-background">
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomeLayout />}>
                        <Route index element={<Home />} />
                        <Route
                            path="/concept-fibre"
                            element={<ConceptFibre />}
                        />
                        <Route
                            path="/concept-energy"
                            element={<ConceptEnergy />}
                        />
                    </Route>
                </Routes>
            </div>
        </Suspense>
    );
}

export default App;
