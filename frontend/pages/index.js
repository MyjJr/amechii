import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import IndexNavbar from "../components/Navbars/IndexNavbar";
import Card from "../components/cards/Card";

export default function Home() {
  return (
    <div className="layout-container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexNavbar />
      <div className="title-section flex justify-center items-center">
        {/* <h1 className="text-3xl">time line</h1> */}
      </div>
      <main className="timeLine-section">
        <div className="cardWrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
      </main>
    </div>
  );
}
