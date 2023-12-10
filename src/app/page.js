import Head from "next/head";

import Header from "./components/Header";
import Welcome from "./components/Welcome";
import AutoScrollText from "./components/AutoScrollText"
import Menu from "./components/Menu";
import Map from "./components/Map";
import Information from "./components/Information";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Quỳnh Anh Quán</title>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      {/* <Header /> */}
      <Welcome />
      <AutoScrollText/>
      {/* <Menu />
      <Map />
      <Information />
      <Contact /> */}
    </div>
  );
}

