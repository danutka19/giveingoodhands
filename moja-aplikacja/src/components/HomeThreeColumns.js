import React from "react";

export const HomeThreeColumns = () => {
    return (
        <section className="container container__columns">
            <div className="container__columns-detail">
                <div id="bags">10</div>
                <span>Oddanych worków</span>
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur eos harum
                    possimus sequi.
                </article>
            </div>
            <div className="container__columns-detail">
                <div id="organizations">5</div>
                <span>Wspartych organizacji</span>
                <article>
                    Asperiores culpa cupiditate doloremque eos eum eveniet harum, illum ipsum minima
                    necessitatibus officia perferendis veniam voluptates.
                </article>
            </div>
            <div className="container__columns-detail">
                <div id="fundraisings">7</div>
                <span>Zorganizowanych zbiórek</span>
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequatur eos harum
                    possimus sequi.
                </article>
            </div>
        </section>
    )
}