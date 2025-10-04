import Head from 'next/head';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Expertise from '../components/sections/Expertise';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shaun Chikerema - Full-Stack Developer & Software Engineer</title>
        <meta name="description" content="Professional portfolio of Shaun Chikerema - Expert Full-Stack Developer specializing in modern web technologies and scalable solutions." />
        <meta name="keywords" content="Shaun Chikerema, Full-Stack Developer, Software Engineer, React, Next.js, TypeScript, Zimbabwe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Shaun Chikerema - Full-Stack Developer" />
        <meta property="og:description" content="Professional portfolio showcasing expert software development skills and projects" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shaun Chikerema - Full-Stack Developer" />
        <meta name="twitter:description" content="Professional portfolio of an expert software developer" />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}