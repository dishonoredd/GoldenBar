import { Link, useParams } from "react-router-dom";
import css from "/src/styles/cardDetail.module.css";

export function CardDetail() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className={css.main}>
            <h1>Карточка {Number(id) + 1}</h1>
            <Link to={"/"}>назад</Link>
        </div>
    );
}
