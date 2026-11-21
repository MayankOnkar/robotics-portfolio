
function MechanicalEngineering({ data }) {
  return (
    <section className="mechanical-section">
      <div className="robot-section-heading">
        <p className="eyebrow">DESIGN & BUILD</p>
        <h2>{data.heading}</h2>
        <p>{data.intro}</p>
      </div>

      <div className="mechanical-grid">
        {data.sections.map((section) => (
          <article className="mechanical-card" key={section.id}>
            <div className="mechanical-image-wrap">
              <img
                src={section.image}
                alt={section.imageAlt}
                className="mechanical-image"
                loading="lazy"
              />
            </div>

            <div className="mechanical-card-content">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MechanicalEngineering;
