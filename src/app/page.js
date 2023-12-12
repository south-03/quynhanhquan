import Head from "next/head";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Menu from "./components/Menu";
import Map from "./components/Map";
import Information from "./components/Information";
import Contact from "./components/Contact";
import ButtonBackToTop from "./components/Button-back-to-top";
import AutoScroll from "./components/Auto Scroll Text";

export default function Home() {
  return (
    <div className="grid grid-rows-7">
      <Head>
        <title>Quỳnh Anh Quán</title>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>

      <Header />
      <Welcome />
      <AutoScroll/>
      <Menu />
      <Map />
      <Information />
      <Contact />
      <ButtonBackToTop />
    </div>
  );
}
