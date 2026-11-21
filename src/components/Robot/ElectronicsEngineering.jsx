
function ElectronicsEngineering({ data }) {
  return (
    <section className="electronics-section">
      <div className="robot-section-heading">
        <p className="eyebrow">POWER & ELECTRONICS</p>
        <h2>{data.heading}</h2>
        <p>{data.intro}</p>
      </div>

      <div className="electronics-grid">
        {data.sections.map((section) => (
          <article className="electronics-card" key={section.id}>
            <div className="electronics-image-wrap">
              <img
                src={section.image}
                alt={section.imageAlt}
                className="electronics-image"
                loading="lazy"
              />
            </div>

            <div className="electronics-card-content">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ElectronicsEngineering;
