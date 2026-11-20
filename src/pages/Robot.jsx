
function Robot() {
  return (
    <main className="inner-page">
      <p className="eyebrow">GEAR SHIFT / ENGINEERING</p>
      <h1>One Robot. Many Ideas.</h1>
      <p className="page-intro">
        Explore the design, electronics and software
        behind our competition robot.
      </p>

      <img
        src="/images/robot/robot-cad-render.png"
        alt="Gear Shift robot CAD design"
        className="page-robot-image"
      />

      <section className="page-panel">
        <h2>Mechanical Engineering</h2>
        <p>
          Our robot uses a four-wheel mobile platform,
          a two-layer chassis and a servo-actuated
          arm-link and gripper mechanism.
        </p>
      </section>

      <section className="page-panel">
        <h2>Electronics and Control</h2>
        <p>
          The electronics system integrates the
          controller, circuit board, motor control,
          sensors and supporting wiring.
        </p>
      </section>

      <section className="page-panel">
        <h2>Computational Engineering</h2>
        <p>
          Our software uses C++ and the NRL SDK
          for robot control, movement and testing.
        </p>
      </section>
    </main>
  );
}

export default Robot;
