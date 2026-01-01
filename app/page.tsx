import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Platforms from '@/components/Platforms';
import Games from '@/components/Games';
import Giveaway from '@/components/Giveaway';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1628]">
      <Header />
      <Hero />
      <Platforms />
      <Games />
      <Giveaway />
      <News />
      <Footer />
    </main>
  );
}
