import { Link } from "react-router-dom";
import card from "/src/styles/card.module.css";
import { Nav } from "../Navigation";

type CardProps = {
    name: string;
    photo: string;
    price: string;
    id: number;
};

export function Card(props: CardProps) {
    return (
        <>
            <div className={card.container}>
                <h3 className={card.title}>{props.name}</h3>
                <img className={card.img} src={props.photo} alt="" />
                <div className={card.btnContainer}>
                    <p className={card.price}>{props.price}р.</p>
                    <Link to={Nav.card.byId(props.id)}>
                        <button className={card.infBtn}>Подробнее</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
