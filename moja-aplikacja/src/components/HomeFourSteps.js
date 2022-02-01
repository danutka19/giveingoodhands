import React from "react";
import img from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";

export const HomeFourSteps = () => {
    return (

        <section className={"container container__steps"}>
            <h3>Wystarczą 4 proste kroki</h3>
            <div><img src={img}/></div>
            <div className="step">
                <div className="step__bar">
                    <div><img src={icon1} /></div>
                    <span>Wybierz rzeczy</span>
                    <div className="step__line"></div>
                    <article>ubrania, zabawki, sprzęt i inne</article>
                </div>
                <div className="step__bar">
                    <div><img src={icon2} /></div>
                    <span>Spakuj je</span>
                    <div className="step__line"></div>
                    <article>skorzystaj z worków na śmieci</article>
                </div>
                <div className="step__bar">
                    <div><img src={icon3}/></div>
                    <span>Zdecyduj komu chcesz pomóc</span>
                    <div className="step__line"></div>
                    <article>wybierz zaufane miejsce</article>
                </div>
                <div className="step__bar">
                    <div><img src={icon4}/></div>
                    <span>Zamów kuriera</span>
                    <div className="step__line"></div>
                    <article>kurier przyjedzie w dogodnym terminie</article>
                </div>
            </div>
            <div className="container__ul">
                <div>Oddaj rzeczy</div>
             </div>
        </section>

    )
}