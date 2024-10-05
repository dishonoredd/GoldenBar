import { Card } from "./Card";
import c from "/src/styles/packets.module.css";

type Packet = {
    name: string;
    photo: string;
    price: string;
};

export function Packets() {
    const packets: Packet[] = [
        {
            name: "Винное казино",
            photo: "https://via.placeholder.com/600x300?text=Slide+1",
            price: "30000",
        },
        {
            name: "Коктейльное казино",
            photo: "https://via.placeholder.com/600x300?text=Slide+1",
            price: "30000",
        },
        {
            name: "Пирамида игристого",
            photo: "https://via.placeholder.com/600x300?text=Slide+1",
            price: "30000",
        },
        {
            name: "Коктейльная пирамида",
            photo: "https://via.placeholder.com/600x300?text=Slide+1",
            price: "30000",
        },
        {
            name: "Дегустация",
            photo: "https://via.placeholder.com/600x300?text=Slide+1",
            price: "30000",
        },
        {
            name: "Тематический ужин",
            photo: "https://via.placeholder.com/600x300?text=Slide+1",
            price: "30000",
        },
        {
            name: "Выездной коктейльный бар",
            photo: "https://via.placeholder.com/600x300?text=Slide+1",
            price: "30000",
        },
        {
            name: "Кальянный сервис",
            photo: "https://via.placeholder.com/600x300?text=Slide+1",
            price: "30000",
        },
    ];

    return (
        <section className={c.section} id="packages">
            <h1 className={c.h1}>Пакетные предложения</h1>
            <div className={c.container}>
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
