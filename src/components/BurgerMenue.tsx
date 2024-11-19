import { useLockBodyScroll } from "@custom-react-hooks/use-lock-body-scroll";
import { Nav } from "../Navigation";
import { ZIndex } from "../utils/z-index";
import css from "/src/styles/burger.module.css";
import { TelegramIcon } from "./icons/telegram";
import { WhatsapIcon } from "./icons/whatsap";

type BurgerMenueProps = {
    value: boolean;
    setOpen: (value: boolean) => void;
};

export function BurgerMenue(props: BurgerMenueProps) {
    useLockBodyScroll(props.value);

    return (
        <div
            style={{ zIndex: ZIndex.BurgerMenue }}
            className={props.value ? "nav opened" : "nav"}
        >
            <button
                onClick={() => {
                    props.setOpen(false);
                }}
                className={css.closeBtn}
            >
                <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 94.926 94.926"
                >
                    <g>
                        <path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0 c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096 c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476 c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62 s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z" />
                    </g>
                </svg>
            </button>
            <div className={css.container}>
                {" "}
                <a
                    href={Nav.ids.packages}
                    className={css.header__p}
                    onClick={() => {
                        props.setOpen(false);
                    }}
                >
                    Предложения
                </a>{" "}
                <a
                    href={Nav.ids.coctails}
                    className={css.header__p}
                    onClick={() => {
                        props.setOpen(false);
                    }}
                >
                    Коктейли
                </a>
                <a
                    href={Nav.ids.information}
                    className={css.header__p}
                    onClick={() => {
                        props.setOpen(false);
                    }}
                >
                    Информация
                </a>
                <a
                    href={Nav.ids.footer}
                    className={css.header__p}
                    onClick={() => {
                        props.setOpen(false);
                    }}
                >
                    Контакты
                </a>
            </div>{" "}
            <div className={css.svg__container}>
                <TelegramIcon width={40} height={40} color={"#1b1b1b"} />
                <WhatsapIcon width={40} height={40} color={"#1b1b1b"} />
            </div>
        </div>
    );
}
