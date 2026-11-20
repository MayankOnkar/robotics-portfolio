
function RobotSpecs({ specs }) {
  return (
    <section className="robot-specs">
      <div className="robot-section-heading">
        <p className="eyebrow">TECHNICAL SNAPSHOT</p>
        <h2>Robot Specifications</h2>
      </div>

      <div className="robot-specs-grid">
        {specs.map((spec) => (
          <article className="robot-spec-card" key={spec.label}>
            <p className="robot-spec-label">{spec.label}</p>
            <h3>{spec.value}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RobotSpecs;
