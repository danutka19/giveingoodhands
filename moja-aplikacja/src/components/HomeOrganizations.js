import React, {useState, useEffect} from "react";
import { Element } from 'react-scroll';
import img from "../assets/Decoration.svg";
import foundations from "../data/foundations";
import organizations from "../data/organizations";
import charities from "../data/charity";


export const HomeOrganizations = () => {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        setList(foundations);
    }, [])

    const handleBtnFoundation = () => {
        setList(foundations);
        setPage(0);
    }

    const handleBtnOrganization = () => {
        setList(organizations);
        setPage(0);
    }

    const handleBtnCharity = () => {
        setList(charities);
        setPage(0);
    }

    const paginatedList = list.slice(page * 3, page * 3 + 3);

    const paginate = () => new Array(Math.ceil(list.length / 3)).fill(null).map((_, i) => (
        <li key={i+2} onClick={() => setPage(i)} >{i + 1}</li>
    ))
    const text = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."

    return (
        <section className={"container container__organizations"}>
            <Element name="organizations"> </Element>
            <h5>Komu pomagamy?</h5>
            <div><img src={img}/></div>
            <div className="container__organizations-list">
                <button className={"btn"} onClick={handleBtnFoundation}>Fundacjom</button>
                <button className={"btn"} onClick={handleBtnOrganization}>Organizacjom pozarządowym</button>
                <button className={"btn"} onClick={handleBtnCharity}>Lokalnym zbiórkom</button>
            </div>
            <div className="container__organizations-text">
                {text}
            </div>
            <ul>
                {paginatedList.map((el, index) => {
                    return (
                        <div className="container__organizations-name">
                            <li key={el.id}>{el.name}
                                <span>Cel i misja: {el.description}</span>
                            </li>
                            <span>{el.needs}</span>
                        </div>
                    )
                })}
            </ul>
            <ul className="container__organizations-page">
                {paginate()}
            </ul>
        </section>
    )
}