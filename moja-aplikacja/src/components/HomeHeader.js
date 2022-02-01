import React, {useEffect, useState} from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import img from '../assets/Decoration.svg'

export const HomeHeader = () => {
    return (
        <section className={"container container__header"} >
            <div className={"container__image"}> </div>
            <div className={"container__right"}>
                <div className="container__nav">
                    <nav>
                        <ul className={"nav__header"}>
                            <li>
                                <a href className="nav__header-detail">Zaloguj</a>
                            </li>
                            <li>
                                <a href className="nav__header-detail">Załóż konto</a>
                            </li>

                        </ul>
                        <ul className={"nav__header"}>
                            <li>
                                <a href className="nav__header-detail">Start</a></li>
                            <li>
                                <a href className="nav__header-detail">O co chodzi</a>
                            </li>
                            <li>
                                <a href className="nav__header-detail">O nas</a>
                            </li>
                            <li>
                                <a href className="nav__header-detail">Fundacja i organizacje</a>
                            </li>
                            <li>
                                <a href className="nav__header-detail">Kontakt</a>
                            </li>
                        </ul>
                    </nav>

                </div>
                <div className="container__title">
                    <h2>Zacznij pomagać!
                        <p>Oddaj niechciane rzeczy w dobre ręce</p>
                    </h2>
                    <div><img src={img}/></div>
                </div>
                <div className="container__ul">
                        <div>Oddaj rzeczy</div>
                        <div>Zorganizuj zbiórkę</div>
                </div>
            </div>
        </section>
    )
}