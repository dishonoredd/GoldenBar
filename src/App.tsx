import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { MySlider } from "./components/MySlider";
import { Packets } from "./components/Packets";
import { Route, Routes } from "react-router-dom";
import { CardDetail } from "./components/CardDetail";
import { Footer } from "./components/Footer";
import { Information } from "./components/Information";
import { useState } from "react";
import { BurgerMenue } from "./components/BurgerMenue";

function App() {
    const [open, setOpen] = useState(false);
    const setState = () => {
        setOpen(!open);
    };
    return (
        <>
            <Header func={setState} />
            <Routes>
                <Route path="/card/:id" element={<CardDetail />} />
                <Route
                    path="/"
                    element={
                        <>
                            <MainPage />
                            <Packets />
                            <MySlider />
                            <Information />
                            <Footer />
                        </>
                    }
                />
            </Routes>
            <BurgerMenue value={open} setOpen={setOpen} />
        </>
    );
}

export default App;
