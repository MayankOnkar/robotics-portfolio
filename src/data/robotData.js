import assetPath from "../utils/assetPath";
const robotData = {
  name: "Gear Shift Robot",

  hero: {
    eyebrow: "GEAR SHIFT / ENGINEERING",
    title: "Engineered to Move. Built to Perform.",
    description:
      "Meet Gear Shift Robot — our four-wheel competition robot, designed and developed through mechanical, electronics and software engineering.",
    image: assetPath("/images/robot/robot-cad-render.png"),
    imageAlt: "CAD design of Gear Shift Robot",
  },

  overview: {
    title: "One Robot. Many Ideas.",
    description:
      "Built by the Gear Shift team, our robot combines a mobile chassis, a servo-actuated arm and gripper, and an integrated electronic control system.",
  },

  specifications: [
    { label: "Drive system", value: "Four-wheel drive" },
    { label: "Actuators", value: "6" },
    { label: "Main controller", value: "HEXAHUB ESP32-based controller" },
    { label: "Manipulator", value: "Servo-actuated arm and gripper" },
    { label: "Battery voltage", value: "11.1 V nominal" },
    { label: "Battery capacity", value: "2200 mAh" },
  ],

  engineering: [
    {
      id: "mechanical",
      title: "Mechanical Engineering",
      description:
        "A four-wheel mobile platform with a two-layer chassis and a servo-actuated arm-link and gripper mechanism.",
      images: [],
    },
    {
      id: "electronics",
      title: "Electronics Engineering",
      description:
        "An integrated electronics system built around the HEXAHUB ESP32-based controller, custom circuit board, power system, displays and supporting wiring.",
      images: [],
    },
    {
      id: "software",
      title: "Computational Engineering",
      description:
        "C++ software using the NRL SDK for robot movement, controller communication, actuator control and telemetry.",
      images: [],
    },
  ],

  controlSystem: {
    title: "A Wireless Link to the Robot",
    description:
      "A separate handheld game-controller-style device communicates with the HEXAHUB controller over Bluetooth, sending direction and speed commands for the actuators.",
    steps: [
      "Manual game controller",
      "Bluetooth communication",
      "HEXAHUB ESP32 controller",
      "Robot actuators",
    ],
  },

  competition: {
    title: "Built for the Challenge",
    matchDuration: "2 minutes 30 seconds",
    objective:
      "Place as many rings (core elements) as possible onto the poles, then dock on the designated space station — a flexible ramp.",
    images: [],
  },

  futureImprovements: {
    title: "What's Next?",
    description:
      "Our robot is an evolving engineering project. This section will document the improvements and new capabilities we work towards.",
    items: [],
  },
};

export default robotData;
