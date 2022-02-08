import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll";
import img from "../assets/Decoration.svg";

export const LogOut = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = (e) => {
        e.preventDefault()
        console.log(email, "--", password)
        console.log("you will log in soon")
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
                <h5>Wylogowanie nastąpiło pomyślnie</h5>
                <div><img src={img}/></div>
            </div>
            <button className={"btn btn__logout"}>
                <Link to="/">Strona główna</ Link>
            </button>
       </section>
    )
}