function FutureImprovements({ data }) {
  return (
    <section className="future-section">
      <div className="robot-section-heading">
        <span className="section-eyebrow">LOOKING AHEAD</span>
        <h2>{data.heading}</h2>
        <p>{data.intro}</p>
      </div>

      <div className="future-grid">
        {data.improvements.map((item) => (
          <article className="future-card" key={item.id}>
            <span className="future-category">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FutureImprovements;