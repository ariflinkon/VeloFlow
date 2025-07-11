function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-tiers">
        <div className="tier">
          <h3>Free</h3>
          <p>$0/month</p>
          <ul>
            <li>1 Project</li>
            <li>Basic Support</li>
          </ul>
        </div>
        <div className="tier">
          <h3>Pro</h3>
          <p>$9/month</p>
          <ul>
            <li>Unlimited Projects</li>
            <li>Email Support</li>
            <li>Advanced Features</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
