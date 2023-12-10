"use client";
import * as React from "react";
import { styled } from "@mui/material";
import FisrtMenu from "./FisrtMenu"
import SecondMenu from "./SecondMenu"

export default function Menu() {
    return (
        <div>
            <FisrtMenu />
            <SecondMenu />
        </div>
    );
}