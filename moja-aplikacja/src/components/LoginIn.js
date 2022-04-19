import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import img from "../assets/Decoration.svg";

export const LoginIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

    const handleLogIn = (e) => {
        // ogarnąć wyswietlanie błędów na bierząco
        e.preventDefault();
        setErrors([]);
        setSuccess(true);

        const _errors = [];

        if (email.length < 3 || email.indexOf("@") === -1) {
            _errors.push("Email jest nieprawidłowy.");
        }
        if (password.match(/\s/) || password.length < 6) {
            _errors.push("Twoje hasło powinno zawierać conajmniej 6 znaków.");
        }

        if (_errors.length > 0) {
            setErrors(_errors);
            return false;
        }

        const data = {
            email,
            password
        }

        console.log("-data-", data);
        console.log(email);
        console.log(password);
        console.log(wrongData);
        console.log(_errors.join(", "));

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
                            <Link className="nav__header-detail" to="/">O co chodzi</Link>
                        </li>
                        <li>
                            <Link className="nav__header-detail" to="/">O nas</Link>
                        </li>
                        <li>
                            <Link className="nav__header-detail" to="/">Fundacje i organizacje</Link>
                        </li>
                        <li>
                            <Link className="nav__header-detail" to="/">Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container__login-header">
                <h5>Zaloguj się</h5>
                <div><img src={img}/></div>
            </div>
            <form className={success ? "hidden" : "container__login-form"} onSubmit={handleLogIn}>
                <div className="form__input">
                    <div className="form__input_email">
                        <label>Email</label>
                        <input type="text"
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="form__input_password">
                        <label>Hasło</label>
                        <input value={password}
                               min={8}
                               onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="form__button">
                    <button className="btn">
                        <Link to="/register">Załóż konto</ Link></button>
                    <button className="btn">Zaloguj się</button>
                </div>

            </form>
            {wrongData ? <div>
                {errors.map((err, i) => <p key={i + 1}>{err}</p>)}
            </div> : null}
            {success ?
                <div className="container container__login-form">
                    <span>Jesteś zalogowany</span>
                    <button className="btn" type="submit">
                        <Link className="nav__header-detail" to="/">Start</Link>
                    </button>
                </div> : null}
        </section>
    )
}