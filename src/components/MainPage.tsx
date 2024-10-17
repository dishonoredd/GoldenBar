import a from "/src/styles/main-page.module.css";
import {
    counterActions,
    counterSlice,
    decrease,
    increase,
} from "../store/counter-slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function MainPage() {
    const count = useAppSelector((state) => state.counterReducer.count);

    return (
        <section className={a.main__section} id="goldenbar">
            <h1 className={a.h1}>Golden Bar</h1>
            <p>count = {count}</p>
            <ChangeCounter1 />
            <ChangeCounter2 />
            <ChangeCounter3 />
            <ChangeCounter4 />
            <p className={a.p}>Эстетика/Сервис/Мастерство</p>
        </section>
    );
}

function ChangeCounter1() {
    const dispatch = useAppDispatch();

    return (
        <>
            <button onClick={() => dispatch(counterSlice.actions.increase(10))}>
                +
            </button>
            <button onClick={() => dispatch(counterSlice.actions.decrease(5))}>
                -
            </button>
        </>
    );
}

function ChangeCounter2() {
    const dispatch = useAppDispatch();

    return (
        <>
            <button onClick={() => dispatch(increase(10))}>+</button>
            <button onClick={() => dispatch(decrease(5))}>-</button>
        </>
    );
}

function ChangeCounter3() {
    const dispatch = useAppDispatch();

    return (
        <>
            <button onClick={() => dispatch(counterActions.increase(10))}>
                +
            </button>
            <button onClick={() => dispatch(counterActions.decrease(5))}>
                -
            </button>
        </>
    );
}

function ChangeCounter4() {
    const dispatch = useAppDispatch();

    return (
        <>
            <button onClick={() => dispatch(createIncreaseAction(10))}>
                +
            </button>
            <button onClick={() => dispatch(createDecreaseAction(5))}>-</button>
        </>
    );
}

// Action creator
function createIncreaseAction(payload: number) {
    return { type: "counterSlice/increase", payload: payload };
}

function createDecreaseAction(payload: number) {
    return { type: "counterSlice/decrease", payload: payload };
}
