import React, {useState} from "react";
import {Step3} from "./step3";

export const Step2 = ({clothesP, clothesThrowP, toysP, booksP, otherP}) => {
    const [data, setData] = useState({
        clothes: clothesP,
        clothesThrow: clothesThrowP,
        toys: toysP,
        books: booksP,
        other: otherP
    })
    const [bags, setBags] = useState("");
    const [success, setSuccess] = useState(false);
    const [next, setNext] = useState(false);

    const changeBags = (e) => {
        setBags(e.target.value)
    }
    const handleBags = (e) => {
        e.preventDefault();
        setSuccess(true);
        setNext(true);
        console.log(data, "-step2-")
    }

    const handleBack = () => {
        // logika aby się cofnąć
    }

    return (
        <>
            <section className={next ? "hidden" : "container"}>
                <p>Podaj liczbę 60l worków, które spakowałeś/aś swoje rzeczy:</p>
                <form className="form__input" onSubmit={handleBags}>
                    <label>Liczba 60l worków do zabrania:
                        <select onChange={changeBags} value={bags} placeholder="-wybierz-">
                            <option value="0">-wybierz-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </label>
                    <button onClick={handleBack} className="btn">Wstecz</button>
                    <button className="btn">Dalej</button>
                </form>
            </section>
            {success ? <Step3 dataP={data} bagsP={bags}/> : null}
        </>
    )
}