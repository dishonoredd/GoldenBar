import css from "/src/styles/header.module.css";
import { ZIndex } from "../utils/z-index";
import { Nav } from "../Navigation";
import { TelegramIcon } from "./icons/telegram";
import { WhatsapIcon } from "./icons/whatsap";

export function Header() {
    return (
        <>
            <header className={css.header} style={{ zIndex: ZIndex.Header }}>
                <div className={css.div}>
                    <a href={Nav.ids.goldenBar} className={css.logo}>
                        GoldenBar
                    </a>
                </div>

                <div className={css.div}>
                    <a href={Nav.ids.information} className={css.header__p}>
                        Информация
                    </a>
                    <a href={Nav.ids.footer} className={css.header__p}>
                        Контакты
                    </a>
                    <a href={Nav.ids.coctails} className={css.header__p}>
                        Коктейли
                    </a>
                    <a href={Nav.ids.packages} className={css.header__p}>
                        Предложения
                    </a>
                </div>
                <div className={css.svg__container}>
                    <TelegramIcon />
                    <WhatsapIcon />
                </div>
            </header>
        </>
    );
}
