import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import img from "../assets/Decoration.svg";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [wrongData, setWrongData] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (errors.length > 0) {
            setWrongData(true)
            setSuccess(false)
        } else {
            setWrongData(false)
        }
    }, [errors])

    const handleRegister = (e) => {
        // ogarnąć wyswietlanie błędów na bierząco
        e.preventDefault();
        setErrors([]);
        setSuccess(true);

        const _errors = [];

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.push("Email jest nieprawidłowy.");
        }
        if (password1.match(/\s/) || password1.length < 6) {
            _errors.push("Twoje hasło powinno zawierać conajmniej 6 znaków.");
        }
        if (password2 !== password1) {
            _errors.push("Twoje hasła powinny być takie same.");
        }

        if (_errors.length > 0) {
            setErrors(_errors);
            console.log(_errors.join(", "))
            return false;
        }

        const data = {
            email,
            password1,
            password2
        }

        console.log("-data-", data);
    }
    return (
        <section className="container container__login">
            <div className="container__nav">
                <nav>
                    <ul className={"nav__header"}>
                        <li>
                            <Link className="nav__header-detail" to="/login">Zaloguj</Link>
                        </li>
                        <li>
                            <Link className="nav__header-detail" to="/register">Załóż konto</ Link>
                        </li>
                    </ul>
                    <ul className={"nav__header"}>
                        <li>
                            <Link className="nav__header-detail" to="/">Start</Link></li>
                        <li>
                            <a href className="nav__header-detail">O co chodzi</a>
                        </li>
                        <li>
                            <Scroll smooth className="nav__header-detail" to="aboutus">O nas</Scroll>
                        </li>
                        <li>
                            <Scroll smooth className="nav__header-detail" to="organizations">Fundacje i
                                organizacje</Scroll>
                        </li>
                        <li>
                            <Scroll smooth className="nav__header-detail" to="contactus">Kontakt</Scroll>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container__login-header">
                <h5>{success ? "Twoje konto zostało poprawnie założone" : "Załóż konto"}</h5>
                <div><img src={img}/></div>
            </div>
            <form className={success ? "hidden" : "container__login-form"} onSubmit={handleRegister}>
                <div className="form__input">
                    <div className="form__input_email">
                        <label>Email</label>
                        <input type="text"
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form__input_password">
                        <label>Hasło</label>
                        <input value={password1}
                               min={8}
                               onChange={e => setPassword1(e.target.value)}/>
                    </div>
                    <div className="form__input_password">
                        <label>Powtórz hasło</label>
                        <input value={password2}
                               min={8}
                               onChange={e => setPassword2(e.target.value)}/>
                    </div>
                </div>
                <div className="form__button">

                    <button className="btn">
                        <Link to="/login">Zaloguj się</ Link>
                        </button>
                    <button className="btn" type="submit">Załóż konto</button>
                </div>

            </form>
            {wrongData ? <div>
                {errors.map((err, i) => <p key={i + 1}>{err}</p>)}
            </div> : null}
            {success ?
                <div className="container container__login-form">
                    <button className="btn" type="submit">
                        <Link className="nav__header-detail" to="/">Start</Link>
                    </button>
                </div>
                : null}

        </section>
    )
}