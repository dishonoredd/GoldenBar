import Slider, { CustomArrowProps } from "react-slick";
import b from "/src/styles/slider.module.css";
import { slides } from "./slides";

function SampleNextArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                position: "absolute",
                right: "-220px",
                transform: "scale(2.7)",
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                position: "absolute",
                left: "-220px",
                transform: "scale(2.7)",
            }}
            onClick={onClick}
        />
    );
}

export function MySlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className={b.section} id="coctails">
            <div className={b.main}>
                <h1 className={b.h1}>Авторские коктейли</h1>

                <Slider {...settings}>
                    {slides.map((slide) => (
                        <div style={{ outline: "none" }} key={slide.id}>
                            <img
                                src={slide.image}
                                className={b.slider__image}
                            />
                            <p className={b.p}>{slide.text}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}
