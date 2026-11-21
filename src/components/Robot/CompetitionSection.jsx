
function CompetitionSection({ data }) {
  return (
    <section className="competition-section">
      <div className="robot-section-heading">
        <p className="eyebrow">THE CHALLENGE</p>
        <h2>{data.heading}</h2>
        <p>{data.intro}</p>
      </div>

      <div className="competition-objective">
        <div className="match-duration">
          <span>{data.match.duration}</span>
          <p>{data.match.durationLabel}</p>
        </div>

        <div className="competition-objective-content">
          <h3>Competition Objective</h3>
          <p>{data.match.objective}</p>
          <p>{data.match.docking}</p>
        </div>
      </div>

      <div className="competition-highlights">
        {data.highlights.map((item) => (
          <article className="competition-card" key={item.id}>
            <div className="competition-image-wrap">
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
              />
            </div>

            <div className="competition-card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="competition-gallery">
        <h3>Moments from the Competition</h3>

        <div className="competition-gallery-grid">
          {data.gallery.map((image) => (
            <figure className="competition-gallery-item" key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompetitionSection;
