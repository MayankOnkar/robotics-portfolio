

function Home() {
  return (
    <>
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              TEAM #194 · GITANJALI SCHOOLS
            </p>

            <h1>
              WHERE IDEAS
              <br />
              <span>SHIFT INTO REALITY.</span>
            </h1>

            <p className="hero-description">
              We are Gear Shift — six high-school students and
              our faculty mentor, bringing together mechanical
              engineering, electronics and computational design
              to build innovative robotics solutions.
            </p>

            <div className="hero-actions">
              <a href="#robot" className="primary-button">
                Explore Our Robot ↗
              </a>

              <a href="#about" className="secondary-button">
                Meet the Team
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>06</strong>
                <span>STUDENT MEMBERS</span>
              </div>

              <div>
                <strong>03</strong>
                <span>ENGINEERING DOMAINS</span>
              </div>

              <div>
                <strong>#194</strong>
                <span>TEAM NUMBER</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-label">
              <span className="status-dot"></span>
              ROBOT DESIGN / CAD RENDER
            </div>

            <img
              src="/images/robot/robot-cad-render.png"
              alt="Gear Shift competition robot CAD render"
              className="robot-render"
            />

            <p className="image-caption">
              ENGINEERED BY GEAR SHIFT
            </p>
          </div>
        </section>

        <section className="about-section" id="about">
          <p className="eyebrow">01 / WHO WE ARE</p>

          <h2>
            Engineering ideas.
            <br />
            Building possibilities.
          </h2>

          <p>
            Gear Shift is a robotics team from Gitanjali Schools
            (Senior), Begumpet. Our team brings together six
            students from Grades 9 and 10, guided by our faculty
            mentor in Robotics and AI.

            Together, we work across mechanical engineering,
            electronics and software to design, build, test and
            refine our robot.
          </p>

          <div className="vision-card">
            <p className="eyebrow">OUR VISION</p>
            <p>
              To bring together our knowledge of mechanics,
              electronics, software and control systems to design,
              build and refine a capable robot — and put our
              learning into action through thoughtful engineering,
              teamwork and performance.
            </p>
          </div>
        </section>

        <section className="robot-section" id="robot">
          <p className="eyebrow">02 / OUR ENGINEERING</p>
          <h2>One robot. Three disciplines.</h2>

          <div className="discipline-grid">
            <article className="discipline-card">
              <span>01</span>
              <h3>Mechanical</h3>
              <p>
                Chassis construction, drivetrain, arm-link
                mechanism and gripper design.
              </p>
            </article>

            <article className="discipline-card">
              <span>02</span>
              <h3>Electronics</h3>
              <p>
                Controller integration, motor drivers,
                sensors, wiring and actuation.
              </p>
            </article>

            <article className="discipline-card">
              <span>03</span>
              <h3>Computational</h3>
              <p>
                Robot control, programming, movement,
                servo logic and testing.
              </p>
            </article>
          </div>
        </section>

        <section className="achievement-section" id="achievements">
          <p className="eyebrow">03 / OUR ACHIEVEMENTS</p>
          <h2>Progress worth celebrating.</h2>

          <div className="achievement-grid">
            <article className="achievement-card">
              <strong>TOP 3</strong>
              <h3>Regional Qualification</h3>
              <p>
                Finished among the top three teams at
                Regionals on 14 November 2026.
              </p>
            </article>

            <article className="achievement-card">
              <strong>RUNNER-UP</strong>
              <h3>Regional Final Match</h3>
              <p>
                Received the Runner-up Award in the
                regional final match.
              </p>
            </article>

            <article className="achievement-card">
              <strong>1ST RANK</strong>
              <h3>Tech Titans Award</h3>
              <p>
                Secured first rank among the participating
                teams for the Tech Titans Award.
              </p>
            </article>
          </div>

          <p className="nationals-note">
            NEXT DESTINATION: NATIONALS · IIT BOMBAY · DECEMBER 2026
          </p>
        </section>
      </main>

      <footer className="footer">
        <h2>GEAR SHIFT</h2>
        <p>Grinding Ideas. Gearing Futures.</p>
        <span>TEAM #194 · GITANJALI SCHOOLS</span>
      </footer>
    </>
  );
}

export default Home;
