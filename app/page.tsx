import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Platforms from '@/components/Platforms';
import Games from '@/components/Games';
import Giveaway from '@/components/Giveaway';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Platforms />
      <Games />
      <Giveaway />
    </main>
  );
}
