import Head from "next/head";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import Map from "./components/Map";
import Information from "./components/Information";
import Contact from "./components/Contact";
import ButtonBackToTop from './components/Button-back-to-top';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quỳnh Anh Quán</title>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <Information />
      {/* <Header />
      <Welcome />
      <Menu />
      <Map />
      
      <Contact /> */}
      <Menu />
    </div>
  );
}
