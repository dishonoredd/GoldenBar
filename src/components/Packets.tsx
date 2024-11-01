import { Card } from "./Card";
import { packets } from "./packets-data";
import css from "/src/styles/packets.module.css";

export function Packets() {
    return (
        <section className={css.section} id="packages">
            <h1 className={css.h1}>Пакетные предложения</h1>
            <div className={css.container}>
                {packets.map((packet, i) => (
                    <Card
                        key={i}
                        id={i}
                        name={packet.name}
                        photo={packet.photo}
                        price={packet.price}
                    />
                ))}
            </div>
        </section>
    );
}
