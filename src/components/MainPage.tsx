import a from "/src/styles/main-page.module.css";

export function MainPage() {
    return (
        <section className={a.main__section} id="goldenbar">
            <h1 className={a.h1}>Golden Bar</h1>

            <p className={a.p}>Эстетика/Сервис/Мастерство</p>
        </section>
    );
}
