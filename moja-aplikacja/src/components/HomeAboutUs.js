import React from "react";
import img from "../assets/Decoration.svg"
import sign from "../assets/Signature.svg"

export const HomeAboutUs = () => {
    return (
        <div className={"container container__about"}>
            <div className={"container__about-left"}>
                <h4>O nas</h4>
                <div><img src={img}/></div>
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, perspiciatis, velit. Ad earum
                    esse exercitationem harum, mollitia nesciunt quae quia quos suscipit tempore? Atque deleniti,
                    eum fugit ipsa quas suscipit.
                </article>
                <div><img src={sign}/></div>
            </div>
            <div className={"container__about-right"}> </div>
        </div>
    )
}