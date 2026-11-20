
function RobotHero({ data }) {
  return (
    <section className="robot-hero">
      <p className="eyebrow">{data.eyebrow}</p>

      <h1>{data.title}</h1>

      <p className="page-intro">
        {data.description}
      </p>

      <img
        src={data.image}
        alt={data.imageAlt}
        className="page-robot-image"
      />
    </section>
  );
}

export default RobotHero;
