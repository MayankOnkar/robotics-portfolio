
function RobotOverview({ data }) {
  return (
    <section className="robot-overview">
      <div className="robot-section-heading">
        <p className="eyebrow">THE MACHINE</p>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </section>
  );
}

export default RobotOverview;
