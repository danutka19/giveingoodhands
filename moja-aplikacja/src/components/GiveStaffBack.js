import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Step1} from "./givestaffback/step1";
import img from "../assets/Decoration.svg";

export const GiveStaffBack = () => {
    const [step1, setStep1] = useState(true);

    const onStep1 = () => {
        setStep1(false);
    }

    return (
            <section className="container">
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
                            <Link className="nav__header-detail" to="/">O nas</Link>
                        </li>
                        <li>
                            <Link className="nav__header-detail" to="/">Fundacje i
                                organizacje</Link>
                        </li>
                        <li>
                            <Link className="nav__header-detail" to="/">Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container__login-header">
                <h5>ODDAJ RZECZY</h5>
                <div><img src={img}/></div>
            </div>
                <div>
                    {step1 ? <Step1 handleStep1={onStep1} /> : null}
                </div>
            </section>
    )
}