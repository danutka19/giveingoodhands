import React, {useState} from "react";
import {Summary} from "./summary";

export const Step4 = ({dataP}) => {
    const [data, setData] = useState({
        dataP,

    })
    const [street, setStreet] = useState("");
    const [town, setTown] = useState("");
    const [post, setPost] = useState("");
    const [mobile, setMobile] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [success, setSuccess] = useState(false);
    const [next, setNext] = useState(false);


    const handleBags = (e) => {
        e.preventDefault();
        setSuccess(true);
        setNext(true);
        console.log(success, "-step4-")
    }

    const handleBack = () => {
        // logika aby się cofnąć
    }

    return (
        <>
            <section className={next ? "hidden" : "container"}>
                <p>Podaj adres oraz termin odbioru przez kuriera:</p>
                <form className="form__input" onSubmit={handleBags}>
                    <div>
                        <span>Adres odbioru:</span>
                        <label>Ulica:</label>
                        <input type="text" onChange={e => setStreet(e.target.value)} value={street}/>
                        <label>Miasto:</label>
                        <input type="text" onChange={e => setTown(e.target.value)} value={town}/>
                        <label>Kod pocztowy:</label>
                        <input type="text" onChange={e => setPost(e.target.value)} value={post}/>
                        <label>Numer telefonu:</label>
                        <input type="text" onChange={e => setMobile(e.target.value)} value={mobile}/>
                    </div>
                    <div>
                        <span>Termin odbioru:</span>
                        <label>Data:</label>
                        <input type="text" onChange={e => setDate(e.target.value)} value={date}/>
                        <label>Godzina:</label>
                        <input type="text" onChange={e => setHour(e.target.value)} value={hour}/>
                        <label>Uwagi dla kuriera:</label>
                        <textarea/>
                    </div>
                    <button className="btn">Dalej</button>
                </form>
                <button onClick={handleBack} className="btn">Wstecz</button>

            </section>
            {success ? <Summary /> : null}
        </>
    )
}