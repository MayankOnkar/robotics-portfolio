
function ComputationalEngineering({ data }) {
  return (
    <section className="computational-section">
      <div className="robot-section-heading">
        <span className="section-eyebrow">SOFTWARE & CONTROL</span>
        <h2>{data.heading}</h2>
        <p>{data.intro}</p>
      </div>

      <div className="computational-grid">
        {data.sections.map((section) => (
          <article className="computational-card" key={section.id}>
            <h3>{section.title}</h3>
            <p>{section.description}</p>

            <ul>
              {section.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ComputationalEngineering;
