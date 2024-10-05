import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { MySlider } from "./components/MySlider";
import { Packets } from "./components/Packets";
import { Route, Routes } from "react-router-dom";
import { CardDetail } from "./components/CardDetail";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/card/:id" element={<CardDetail />} />
                <Route
                    path="/"
                    element={
                        <>
                            <MainPage />
                            <MySlider />
                            <Packets />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
