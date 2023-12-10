"use client";
import * as React from "react";
import Head from "next/head";
import { styled } from "@mui/material";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import AutoScrollText from "./components/AutoScrollText";
import Menu from "./components/Menu";
import Map from "./components/Map";
import Information from "./components/Information";
import Contact from "./components/Contact";
import ButtonBackToTop from './components/Button-back-to-top';

export default function Home() {
  return (
    <div className="grid grid-rows-4">
      <Head>
        <title>Quỳnh Anh Quán</title>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>


      <Header className="mt-2" />
      <Welcome />
      <AutoScrollText />
    </div>
  );
}

