import React, {useState} from "react";
import {Step2} from "./step2";

export const Step1 = () => {
    const [clothes, setClothes] = useState("");
    const [clothesThrow, setClothesThrow] = useState("");
    const [toys, setToys] = useState("");
    const [books, setBooks] = useState("");
    const [other, setOther] = useState("");
    const [success, setSuccess] = useState(false);
    const [next, setNext] = useState(false);

    const handleStaff = (e) => {
        e.preventDefault();
        setSuccess(true);
        setNext(true);

    }

    // jak checkboxy uaktualniać? tak aby je odznaczyć, że nie chcę

    return (
        <>
            <section className={next ? "hidden" : "container"}>
                <p>Zaznacz co chcesz oddać:</p>
                <form className="form__input" onSubmit={handleStaff}>
                    <label>ubrania, które nadają się do ponowanego użycia
                        <input type="checkbox" onChange={e => setClothes(e.target.value)} value="ubrania, które nadają się do ponowanego użycia"/>
                    </label>
                    <label>ubrania do wyrzucenia
                        <input type="checkbox" onChange={e => setClothesThrow(e.target.value)} value="ubrania do wyrzucenia"/>
                    </label>
                    <label>zabawki
                        <input type="checkbox" onChange={e => setToys(e.target.value)} value="zabawki"/>
                    </label>
                    <label>książki
                        <input type="checkbox" onChange={e => setBooks(e.target.value)} value="książki"/>
                    </label>
                    <label>inne
                        <input type="checkbox" onChange={e => setOther(e.target.value)} value="inne" />
                    </label>
                    <button className="btn">Dalej</button>
                </form>
            </section>
            {success ? <Step2 clothesP={clothes}
                              clothesThrowP={clothesThrow}
                              toysP={toys}
                              booksP={books}
                              otherP={other}/> : null}
        </>


    )
}