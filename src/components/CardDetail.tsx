import { useParams } from "react-router-dom";
import css from "/src/styles/card-detail.module.css";

type CardDetailProps = {
    text: string;
    image: string;
};

export function CardDetail(props: CardDetailProps) {
    const { id } = useParams<{ id: string }>();

    return (
        <div className={css.main}>
            <h1>Карточка {Number(id) + 1}</h1>
        </div>
    );
}
