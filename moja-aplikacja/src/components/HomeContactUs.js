import React, {useState} from "react";
import img from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg"
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

export const HomeContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleForm = () => {

    }
    return (
        <>
            <section className={"container container__contact"}>
                <div className="container__contact_right">
                    <div className="right__header">
                        <h5>Skontaktuj się z nami</h5>
                        <div><img src={img}/></div>
                    </div>
                    <form action="" className="right__form" onSubmit={handleForm}>
                        <label>Wpisz imię</label>
                        <input placeholder="Krzysztof"
                               type="text"
                               value={name}
                               onChange={e => setName(e.target.value)}

                        />
                        <label>Wpisz swój email</label>
                        <input placeholder="abc@xyz.com"
                               type="text"
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                        />
                        <label>Wpisz swoją wiadomość</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder={text}>

                    </textarea>
                    </form>
                    <button>Wyślij</button>
                </div>
                <div className="container__contact_footer"><a id="footer"></a>
                    <span> Copyright by Coders Lab</span>
                    <img src={facebook} />
                    <img src={instagram} />
                </div>
            </section>


        </>

    )
}