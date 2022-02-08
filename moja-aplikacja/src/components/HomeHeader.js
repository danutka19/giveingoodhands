import React from "react";
import img from '../assets/Decoration.svg'
import {Link} from "react-router-dom";
import { Link as Scroll } from 'react-scroll';


export const HomeHeader = () => {
    return (
        <section className={"container container__header"} >
            <div className={"container__image"}> </div>
            <div className={"container__right"}>
                <div className="container__nav">
                    <nav>
                        <ul className={"nav__header"}>
                            <li>
                                <Link to="/login">Zaloguj</Link>
                            </li>
                            <li>
                                <Link to="/register">Załóż konto</ Link>
                            </li>
                        </ul>
                        <ul className={"nav__header"}>
                            <li>
                                <Link to="/">Start</Link>
                            </li>
                            <li>
                                <a href className="nav__header-detail">O co chodzi</a>
                            </li>
                            <li>
                                <Scroll smooth className="nav__header-detail" to="aboutus">O nas</Scroll>
                            </li>
                            <li>
                                <Scroll smooth className="nav__header-detail" to="organizations">Fundacje i organizacje</Scroll>
                            </li>
                            <li>
                                <Scroll smooth className="nav__header-detail" to="contactus">Kontakt</Scroll>
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
                        <div>
                            <Link to="/login" className="btn" >Oddaj rzeczy</Link>
                        </div>
                        <div className="btn">Zorganizuj zbiórkę</div>
                </div>
            </div>
        </section>
    )
}