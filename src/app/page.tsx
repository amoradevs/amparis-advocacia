import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';

const Services    = dynamic(() => import('@/components/Services'));
const Diferenciais = dynamic(() => import('@/components/Diferenciais'));
const HowItWorks  = dynamic(() => import('@/components/HowItWorks'));
const About       = dynamic(() => import('@/components/About'));
const Contact     = dynamic(() => import('@/components/Contact'));
const Footer      = dynamic(() => import('@/components/Footer'));
const WhatsAppFloat = dynamic(() => import('@/components/WhatsAppFloat'));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Diferenciais />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
