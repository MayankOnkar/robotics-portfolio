
import RobotHero from "../components/robot/RobotHero";
import RobotOverview from "../components/robot/RobotOverview";
import RobotSpecs from "../components/robot/RobotSpecs";
import robotData from "../data/robotData";
import "../styles/robot.css";

import MechanicalEngineering from "../components/Robot/MechanicalEngineering";
import mechanicalData from "../data/mechanicalData";

import ElectronicsEngineering from "../components/Robot/ElectronicsEngineering";
import electronicsData from "../data/electronicsData";

import WirelessControl from "../components/Robot/WirelessControl";
import controlData from "../data/controlData";

import CompetitionSection from "../components/Robot/CompetitionSection";
import competitionData from "../data/competitionData";

import FutureImprovements from "../components/Robot/FutureImprovements";
import futureData from "../data/futureData";

import ComputationalEngineering from "../components/Robot/ComputationalEngineering";
import computationalData from "../data/computationalData";

function Robot() {
  return (
    <main className="inner-page robot-page">
      <RobotHero data={robotData.hero} />

      <RobotOverview data={robotData.overview} />

      <RobotSpecs specs={robotData.specifications} />

      <MechanicalEngineering data={mechanicalData} />

      <ElectronicsEngineering data={electronicsData} />

      <WirelessControl data={controlData} />

      <ComputationalEngineering data={computationalData} />

      <CompetitionSection data={competitionData} />

      <FutureImprovements data={futureData} />


      
    </main>
  );
}

export default Robot;
