import React, {useEffect, useState} from "react";
import {HomeHeader} from "./HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns";
import {HomeFourSteps} from "./HomeFourSteps";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeOrganizations} from "./HomeOrganizations";
import {HomeContactUs} from "./HomeContactUs";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <HomeHeader />
            <HomeThreeColumns />
            <HomeFourSteps />
            <HomeAboutUs />
            <HomeOrganizations />
            <HomeContactUs />
        </>

    )
}
