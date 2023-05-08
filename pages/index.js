import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Works from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {useState} from "react";
import MobileNavbar from "../components/MobileNavbar";
import Projects from "../components/Projects";
import Hobby from "../components/Hobby";
import Services from "../components/services";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const toggleNavbar = () => {
    setOpen(!isOpen);
  };
  return (
    <div>
      <Head>
        <title>Lolita | Portfolio</title>
        <meta
          name="description"
          content="Ap portfolio website created with NextJs and Tailwind"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="freelance,developer,lolita,gold,lolita gold,projects,websites,software,ecommerce,development,freelancer, business, web developer,web developer, seo, seo analyst, software developer,html,js,css,html5,css3,javascript,react,nodejs,nextjs,technical writer,e-commerce, mobile developer, UI/UX Developer, flutter, flutter developer"
          data-react-helmet="true"
        />
        <meta charSet="utf-8" />
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
