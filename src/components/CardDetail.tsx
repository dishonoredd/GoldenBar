import { useParams } from "react-router-dom";
import css from "/src/styles/card-detail.module.css";
import { packets } from "./packets-data";

export function CardDetail() {
    const { id } = useParams<{ id: string }>();

    const packet = packets[Number(id)];

    return (
        <div className={css.main}>
            <img src={packet.photo} alt="" />
            <p>{packet.text}</p>
            <h1>Карточка {Number(id) + 1}</h1>
        </div>
    );
}
