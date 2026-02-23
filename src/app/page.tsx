import Header from '../components/layout/Header';
import Hero   from '../components/sections/Hero';
import Work   from '../components/sections/Work';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import Footer  from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}