import css from "/src/styles/header.module.css";
import { ZIndex } from "../utils/z-index";
import { Nav } from "../Navigation";
import { TelegramIcon } from "./icons/telegram";
import { WhatsapIcon } from "./icons/whatsap";

type HeaderProps = {
    func: () => void;
};

export function Header(props: HeaderProps) {
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
                    <TelegramIcon width={34} height={34} color={"#ffffff"} />
                    <WhatsapIcon width={34} height={34} color={"#ffffff"} />
                </div>

                <div className={css.div1}>
                    <a href={Nav.ids.goldenBar} className={css.logo}>
                        GoldenBar
                    </a>{" "}
                    <button className={css.burgerBtn} onClick={props.func}>
                        <svg
                            x="0px"
                            y="0px"
                            width="30"
                            height="25"
                            viewBox="0 0 50 50"
                            style={{ fill: "#FFFFFF" }}
                        >
                            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
}
