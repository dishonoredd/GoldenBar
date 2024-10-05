import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "./components/Header";
import { MainPage } from "./components/MainPage";
import { MySlider } from "./components/MySlider";
import { Packets } from "./components/Packets";

function App() {
    return (
        <>
            <Header />
            <MainPage />
            <MySlider />
            <Packets />
        </>
    );
}

export default App;
