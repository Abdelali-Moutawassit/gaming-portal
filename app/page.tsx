import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Platforms from '@/components/Platforms';
import Games from '@/components/Games';
import Giveaway from '@/components/Giveaway';
import Testimonials from '@/components/Testimonials';
import News from '@/components/News';
import Footer from '@/components/Footer';
import ScrollEffects from '@/components/ScrollEffects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <ScrollEffects />
      <Header />
      <Hero />
      <Platforms />
      <Games />
      <Giveaway />
      <Testimonials />
      <News />
      <Footer />
    </main>
  );
}
