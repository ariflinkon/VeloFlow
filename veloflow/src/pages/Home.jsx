import Feature from '../components/Feature';

function Home() {
  return (
    <section className="home">
      <h1>Welcome to VeloFlow</h1>
      <p>The fast SaaS starter built with React + Vite.</p>

      <div className="features">
        <Feature
          title="⚡ Lightning Fast"
          description="Powered by Vite's super-fast bundling engine."
        />
        <Feature
          title="💡 Modern React"
          description="Built with Hooks, JSX, and modern component design."
        />
        <Feature
          title="🎨 Clean UI"
          description="Minimal design to help you start building your SaaS quickly."
        />
      </div>
    </section>
  );
}

export default Home;
