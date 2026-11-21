import assetPath from "../utils/assetPath";

const competitionData = {
  heading: "Competition and Performance",

  intro:
    "Gear Shift Robot was designed to take on a timed robotics challenge that combines ring placement, precise movement and controlled docking.",

  match: {
    duration: "2:30",
    durationLabel: "Match duration",
    objective:
      "Place as many rings (core elements) as possible onto the poles, then dock on the designated space station.",
    docking:
      "The space station is a flexible ramp that the robot must dock on.",
  },

  highlights: [
    {
      id: "ring-placement",
      title: "Ring Placement",
      description:
        "The robot uses its arm and gripper mechanism to interact with the competition's ring elements and place them onto poles.",
      image: assetPath("/images/robot/ring-gripper-action-1.jpg"),
      imageAlt: "Gear Shift Robot gripper interacting with a competition ring",
    },
    {
      id: "field-navigation",
      title: "Competition Field",
      description:
        "The robot operates within the competition field, navigating around field elements as the team works to complete the challenge.",
      image: assetPath("/images/robot/competition-field-overview.jpg"),
      imageAlt: "Overview of the robotics competition field",
    },
    {
      id: "robot-action",
      title: "Robot in Action",
      description:
        "Competition photographs capture Gear Shift Robot interacting with the field elements during the challenge.",
      image: assetPath("/images/robot/robot-field-interaction-1.jpg"),
      imageAlt: "Gear Shift Robot interacting with a competition field element",
    },
  ],

  gallery: [
    {
      src: assetPath("/images/robot/ring-gripper-action-1.jpg"),
      alt: "Robot gripper near a competition ring",
      caption: "Gripper interaction",
    },
    {
      src: assetPath("/images/robot/ring-gripper-action-2.jpg"),
      alt: "Gear Shift Robot working with a ring and pole",
      caption: "Ring and pole interaction",
    },
    {
      src: assetPath("/images/robot/robot-field-interaction-2.jpg"),
      alt: "Gear Shift Robot on the competition field",
      caption: "Competition field",
    },
  ],
};

export default competitionData;
