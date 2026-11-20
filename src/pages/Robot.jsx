
import RobotHero from "../components/robot/RobotHero";
import RobotOverview from "../components/robot/RobotOverview";
import RobotSpecs from "../components/robot/RobotSpecs";
import robotData from "../data/robotData";
import "../styles/robot.css";

function Robot() {
  return (
    <main className="inner-page robot-page">
      <RobotHero data={robotData.hero} />

      <RobotOverview data={robotData.overview} />

      <RobotSpecs specs={robotData.specifications} />

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
