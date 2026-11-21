
const computationalData = {
  heading: "Computational Engineering",
  intro:
    "The robot's computational system combines C++ programming, controller communication and sensor feedback to translate operator inputs into robot actions.",

  sections: [
    {
      id: "programming",
      title: "Programming and Development",
      description:
        "The robot's control software was developed in C++ using the NRL SDK. The software connects operator inputs with the robot's movement and actuator functions.",
      highlights: [
        "C++ programming",
        "NRL SDK",
        "Robot control logic",
      ],
    },
    {
      id: "drive-control",
      title: "Drive Control",
      description:
        "The handheld controller sends movement commands to the robot. Tank-drive control translates these inputs into movement commands for the four-wheel drive system.",
      highlights: [
        "Tank-drive movement",
        "Direction and speed control",
        "Wireless operator input",
      ],
    },
    {
      id: "actuator-control",
      title: "Arm and Gripper Control",
      description:
        "Servo positioning allows the operator to control the robot's arm and gripper for manipulating game elements.",
      highlights: [
        "Servo positioning",
        "Arm movement",
        "Gripper operation",
      ],
    },
    {
      id: "sensor-feedback",
      title: "Sensor Feedback and Telemetry",
      description:
        "IMU-assisted turning supports robot orientation during movement. Battery-voltage readings are used to provide battery monitoring information.",
      highlights: [
        "IMU-assisted turning",
        "Battery-voltage monitoring",
        "OLED telemetry display",
      ],
    },
  ],
};

export default computationalData;
