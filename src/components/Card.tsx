import { Link } from "react-router-dom";
import card from "/src/styles/card.module.css";

type CardProps = {
    name: string;
    photo: string;
    price: string;
    id: number;
};

export function Card(props: CardProps) {
    return (
        <>
            <div className="">
                <h3 className={card.title}>{props.name}</h3>
                <img className={card.img} src={props.photo} alt="" />
                <div className={card.btnContainer}>
                    <p className={card.price}>{props.price}р.</p>
                    <Link to={`/card/${props.id}`}>
                        <button className={card.infBtn}>Подробнее</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
