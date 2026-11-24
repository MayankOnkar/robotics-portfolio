import assetPath from "../utils/assetPath";


const teamMembers = [
  {
    name: "Sanskriti Mahapatra",
    grade: "Grade 10",
    role: "Team Captain & Technical Lead",
    image: assetPath("/images/team/sanskriti.jpeg"),
    thumbnail: assetPath("/images/team/thumbnail/sanskriti_50percent.jpeg"),
  },
  {
    name: "Sri Saanvitha Daparthi",
    grade: "Grade 10",
    role: "Project Manager & Electrical",
    image: assetPath("/images/team/saanvitha.jpeg"),
    thumbnail: assetPath("/images/team/thumbnail/saanvitha_50percent.jpeg"),
  },
  {
    name: "Ayushmaan Madan",
    grade: "Grade 10",
    role: "Mechanical & Gripper",
    image: assetPath("/images/team/ayushmaan.png"),
    thumbnail: assetPath("/images/team/thumbnail/ayushmaan_50percent.png"),
  },
  {
    name: "Sampath Ashok Tankala",
    grade: "Grade 10",
    role: "Documentation & Socials",
    image: assetPath("/images/team/sampath.jpeg"),
    thumbnail: assetPath("/images/team/thumbnail/sampath_50percent.jpeg"),
  },
  {
    name: "Kongara Rakshan",
    grade: "Grade 9",
    role: "Robot Operator & Mechanics",
    image: assetPath("/images/team/rakshan.jpeg"),
    thumbnail: assetPath("/images/team/thumbnail/rakshan_50percent.jpeg"),
  },
  {
    name: "Mahir Patel",
    grade: "Grade 9",
    role: "Mechanical & Strategy",
    image: assetPath("/images/team/mahir.jpeg"),
    thumbnail: assetPath("/images/team/thumbnail/mahir_50percent.jpeg"),
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
                src={member.thumbnail}
                alt={member.name}
                className="member-image"
                loading="lazy"
                decoding="async"
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
            src={assetPath("/images/team/thumbnail/mayank-onkar-mentor_50percent.jpeg")}
            alt="Gear Shift faculty mentor"
            loading="lazy"
            decoding="async"
      
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
