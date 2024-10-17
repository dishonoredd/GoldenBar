import css from "/src/styles/information.module.css";

export function Information() {
    return (
        <section className={css.section} id="information">
            <p>
                Команда GOLDEN BAR создаст атмосферу вашего любимого бара за его
                пределами! Ужин на яхте в море или в шале высоко в горах, а
                может выездная вечеринка в президентском номере или тимбилдинг
                на рабочем месте. Мы разработаем для Вас персональную программу
                и организуем громкое событие. От пирамиды с игристым и
                коктейльного казино, до иммерсивного ужина и полноценного
                выездного бара!
            </p>
            <img
                src="https://via.placeholder.com/600x300?text=Slide+1"
                alt=""
            />
            <img
                src="https://via.placeholder.com/600x300?text=Slide+1"
                alt=""
            />
            <img
                src="https://via.placeholder.com/600x300?text=Slide+1"
                alt=""
            />
        </section>
    );
}
