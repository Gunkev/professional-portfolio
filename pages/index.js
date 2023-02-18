import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Works from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {useState} from "react";
import MobileNavbar from "../components/MobileNavbar";
import Projects from "../components/Projects";
import Hobby from "../components/Hobby";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <Head>
        <title>Gunkev | Portfolio</title>
        <meta
          name="description"
          content="Ap portfolio website created with NextJs and Tailwind"
        />
        <link rel="icon" href="/favicon.io" />
      </Head>
      <header>
        <Navbar toggleNavbar={toggleNavbar} />
      </header>
      <main>
        <MobileNavbar isOpen={isOpen} toggleNavbar={toggleNavbar} />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Works />
        <Hobby />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
