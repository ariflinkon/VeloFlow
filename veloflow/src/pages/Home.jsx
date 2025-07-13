import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

function Home() {
  return (
    <section className="home">
      <Hero />
      <Pricing />
      <Testimonials />
      <FAQ />
    </section>
  );
}

export default Home;
