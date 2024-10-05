import Slider from "react-slick";
import b from "/src/styles/slider.module.css";

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

    function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    position: "absolute",
                    right: "-150px",
                }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "block",
                    position: "absolute",
                    left: "-150px",
                }}
                onClick={onClick}
            />
        );
    }

    type Slide = {
        id: number;
        image: string;
        text: string;
    };

    const slides: Slide[] = [
        {
            id: 1,
            image: "https://via.placeholder.com/600x300?text=Slide+1",
            text: "Жека стар Евгений!",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/600x300?text=Slide+1",
            text: "Banana time!",
        },
        {
            id: 3,
            image: "https://via.placeholder.com/600x300?text=Slide+1",
            text: "еще какой то коктейль!",
        },
        {
            id: 4,
            image: "https://via.placeholder.com/600x300?text=Slide+1",
            text: "Это четвертый слайд!",
        },
        {
            id: 5,
            image: "https://via.placeholder.com/600x300?text=Slide+1",
            text: "Это 5 слайд!",
        },
        {
            id: 6,
            image: "https://via.placeholder.com/600x300?text=Slide+1",
            text: "Это 555 слайд!",
        },
    ];

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
