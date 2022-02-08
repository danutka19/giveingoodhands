import React, {useState} from "react";
import img from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg"
import {Element} from "react-scroll";
import {Link} from "react-router-dom";

export const HomeContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState(false);

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

    const handleSubmit = (e) => {
        // ogarnąć wyswietlanie błędów na bierząco
        e.preventDefault();

        const _errors = [];

        if (name.match(/\s/) || name.length < 4) {
            _errors.push("Name should be one word.");
        }
        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.push("Email should be valid.");
        }
        if (message.length < 120) {
            _errors.push("Message should be at least 120 characters long.");
        }

        setSuccess(false);

        if (_errors.length > 0) {
            setErrors(_errors);
            return false;
        }

        const data = {
            name,
            email,
            message
        }
        console.log("-data-", data);

        const API = `https://fer-api.coderslab.pl/v1/portfolio/contact`;

        fetch(API, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (response.ok) {
                    console.log("-fetch-", data)
                    return response.json();
                } else {
                    throw new Error("400");
                }
            })
            .then(data => {
                if (data.status === "success") {
                    setSuccess(true);
                    setEmail("");
                    setName("");
                    setMessage("")
                    console.log(data);
                }
            })
            .catch(err => {
                console.log(err);
                console.log("200");
            });
    }

    return (
        <>
            <Element name="contactus"> </Element>
            <section className={"container container__contact"}>
                <div className="container__contact_left"> </div>
                <div className="container__contact_right">
                    <div className="right__header">
                        <h5>Skontaktuj się z nami</h5>
                        <div><img src={img}/></div>
                    </div>
                    {success ? <div>Wiadomość została wysłana, wkrótce się odezwiemy
                        <p>Zapraszamy do naszej społeczności</p>
                        <div className="form__button">
                            <button className="btn">
                                <Link to="/register">Załóż konto</ Link>
                            </button>
                        </div>
                        <button className="btn" onClick={() => setSuccess(false)}>Wyślij jeszcze raz</button></div> : (
                        <div className="right__form">
                            <form action="" className="right__form-details" onSubmit={handleSubmit}>
                                <div className="right__form-inputs">
                                    <div className="input__name">
                                        <label>Wpisz swoje imię</label>
                                        <input placeholder="Krzysztof"
                                               type="text"
                                               value={name}
                                               onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="input__email">
                                        <label>Wpisz swój email</label>
                                        <input placeholder="abc@xyz.com"
                                               type="text"
                                               value={email}
                                               onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="input__textarea">
                                    <label>Wpisz swoją wiadomość</label>
                                    <textarea name="" id="" cols="20" rows="5"
                                              placeholder={text}
                                              value={message}
                                              onChange={e => setMessage(e.target.value)}>
                            </textarea>
                                </div>
                                <button className="btn" type="submit">Wyślij</button>
                            </form>
                            <ul>
                                {errors.map(err => (
                                    <li key={err}>{err}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            </section>
            <section className={"container container__contact_footer"}>
                <span> Copyright by Coders Lab</span>
                <img src={facebook} />
                <img src={instagram} />
            </section>
        </>
    )
}