
const teamMembers = [
  {
    name: "Sanskriti Mahapatra",
    grade: "Grade 10",
    role: "Team Captain & Technical Lead",
    image: "/images/team/sanskriti.jpeg",
  },
  {
    name: "Sri Saanvitha Daparthi",
    grade: "Grade 10",
    role: "Project Manager & Electrical",
    image: "/images/team/saanvitha.jpeg",
  },
  {
    name: "Ayushmaan Madan",
    grade: "Grade 10",
    role: "Mechanical & Gripper",
    image: "/images/team/ayushmaan.png",
  },
  {
    name: "Sampath Ashok Tankala",
    grade: "Grade 10",
    role: "Documentation & Socials",
    image: "/images/team/sampath.jpeg",
  },
  {
    name: "Kongara Rakshan",
    grade: "Grade 9",
    role: "Robot Operator & Mechanics",
    image: "/images/team/rakshan.jpeg",
  },
  {
    name: "Mahir Patel",
    grade: "Grade 9",
    role: "Mechanical & Strategy",
    image: "/images/team/mahir.jpeg",
  },
];

function Team() {
  return (
    <main className="inner-page team-page">
      <header className="team-header">
        <p className="eyebrow">GEAR SHIFT / THE PEOPLE</p>
        <h1>Meet the Minds Behind the Machine.</h1>
        <p className="page-intro">
          Six students, one mentor and a shared passion
          for engineering, innovation and robotics.
        </p>
      </header>

      <section className="team-grid">
        {teamMembers.map((member) => (
          <article className="member-card" key={member.name}>
            <div className="member-image-wrap">
              <img
                src={member.image}
                alt={member.name}
                className="member-image"
                loading="lazy"
              />
              <span className="member-grade">{member.grade}</span>
            </div>

            <div className="member-info">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mentor-section">
        <p className="eyebrow">OUR MENTOR</p>

        <div className="mentor-card">
          <img
            src="/images/team/mayank-onkar-mentor.jpeg"
            alt="Gear Shift faculty mentor"
            loading="lazy"
          />

          <div>
            <h2>Mayank Onkar</h2>
            <p className="mentor-role">
              Faculty Mentor · Robotics and AI
            </p>
            <p>
              Our mentor guides the team through the
              engineering process, helping us connect
              mechanical design, electronics and software.
              He holds a Master's degree in Electronics
              and Communication Engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="team-closing">
        <p className="eyebrow">ONE TEAM. ONE VISION.</p>
        <h2>Different skills. Shared ambition.</h2>
        <p>
          Every contribution matters — from designing
          mechanisms and connecting electronics to
          programming, testing and documenting our work.
        </p>
      </section>
    </main>
  );
}

export default Team;
