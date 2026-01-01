import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Platforms from '@/components/Platforms';
import Stats from '@/components/Stats';
import Games from '@/components/Games';
import Giveaway from '@/components/Giveaway';
import Testimonials from '@/components/Testimonials';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Header />
      <Hero />
      <Stats />
      <Platforms />
      <Games />
      <Giveaway />
      <Testimonials />
      <News />
      <Footer />
    </main>
  );
}
