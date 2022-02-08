import React, {useState} from "react";
import {Step4} from "./step4";

export const Step3 = ({dataP, bagsP}) => {
    const [data, setData] = useState({
        dataP,
        bags: bagsP
    })
    const [city, setCity] = useState("");
    const [children, setChildren] = useState("");
    const [mothers, setMothers] = useState("");
    const [homeless, setHomeless] = useState("");
    const [disabled, setDisabled] = useState("");
    const [elderly, setElderly] = useState("");
    const [success, setSuccess] = useState(false);
    const [next, setNext] = useState(false)

    const changeCity = (e) => {
        setCity(e.target.value)
    }
    const handleForm = (e) => {
        e.preventDefault();
        setSuccess(true);
        setNext(true);
        console.log(data, "-step3-")
    }


    const handleBack = () => {
        // logika aby się cofnąć
    }

    return (
        <>
            <section className={next ? "hidden" : "container"}>
                <form className="form__input" onSubmit={handleForm}>
                    <label>Lokalizacja
                        <select onChange={changeCity} value={city}>
                            <option value="Poznań">Poznań</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Wrocław">Wrocław</option>
                            <option value="Katowice">Katowice</option>
                        </select>
                    </label>
                    <label>Komu chcesz pomóc:
                        <div>dzieciom
                            <input type="checkbox" onChange={e => setChildren(e.target.value)} value="children"/>
                        </div>
                        <div>samotnym matkom
                            <input type="checkbox" onChange={e => setMothers(e.target.value)} value="mothers"/>
                        </div>
                        <div>bezdomnym
                            <input type="checkbox" onChange={e => setHomeless(e.target.value)} value="homeless"/>
                        </div>
                        <div>bezdomnym
                            <input type="checkbox" onChange={e => setDisabled(e.target.value)} value="disabled"/>
                        </div>
                        <div>osobom starszym
                            <input type="checkbox" onChange={e => setElderly(e.target.value)} value="elderly"/>
                        </div>
                    </label>
                    <button className="btn">Dalej</button>
                </form>
                <button onClick={handleBack} className="btn">Wstecz</button>
            </section>
            {success ? <Step4 dataP={data}
                              cityP={city}
                              childrenP={children}
                              mothersP={mothers}
                              homelessP={homeless}
                              disabledP={disabled}
                              elderlyP={elderly}/> : null}
        </>
    )
}