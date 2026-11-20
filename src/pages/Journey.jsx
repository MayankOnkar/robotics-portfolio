
const milestones = [
  {
    date: "22 October 2026",
    title: "Project Begins",
    description: "Robot kit unboxing and initial development."
  },
  {
    date: "Development phase",
    title: "Mechanical and Electronics",
    description: "Chassis construction, mechanism assembly and electronics integration."
  },
  {
    date: "12 November 2026",
    title: "Integrated Control Program",
    description: "Software development and robot control integration."
  },
  {
    date: "14 November 2026",
    title: "Regional Competition",
    description: "Finished among the top three teams and qualified for Nationals."
  },
  {
    date: "December 2026",
    title: "National Competition",
    description: "Qualified to compete at IIT Bombay."
  }
];

function Journey() {
  return (
    <main className="inner-page">
      <p className="eyebrow">GEAR SHIFT / OUR STORY</p>
      <h1>Every Step Moves Us Forward.</h1>
      <p className="page-intro">
        From the first components to a competition-ready
        robot, every milestone represents learning and teamwork.
      </p>

      <div className="timeline">
        {milestones.map((item, index) => (
          <article className="timeline-item" key={index}>
            <span>{item.date}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Journey;
