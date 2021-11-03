import type { NextPage } from "next";
import Head from "next/head";
import { About, Work } from "../components";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Bernardo Cotrim</title>
    </Head>
    <section className="h-screen bg-gray-700 grid place-items-center">
      <h1 className="text-white text-center text-3xl md:text-6xl">
        Hello! I&apos;m
        <span className="text-green-500"> Bernardo</span>.
        <br />
        <span></span>
        <span>
          I&apos;m a <span className="font-bold">frontend engineer</span>.
        </span>
      </h1>
    </section>
    <section className=" bg-gray-700 lg:min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-start justify-items-stretch">
        <About />
        <Work />
      </div>
    </section>
  </>
);

export default Home;
