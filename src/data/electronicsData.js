
const electronicsData = {
  heading: "Electronics Engineering",

  intro:
    "The robot's electronic system brings together its central controller, custom circuit board, power source, displays and supporting connections to coordinate its hardware.",

  sections: [
    {
      id: "controller",
      title: "HEXAHUB Controller",
      description:
        "The HEXAHUB ESP32-based controller serves as the central control unit of Gear Shift Robot, coordinating commands and communication with the robot's electronic systems.",
      image: "/images/robot/hexahub-controller-board.jpg",
       // image: "/images/robot/gripper-detail.jpg",
      imageAlt: "HEXAHUB controller board mounted inside Gear Shift Robot",
    },
    {
      id: "electronics",
      title: "Electronics Integration",
      description:
        "The electronics assembly brings together the controller, circuit board, power connections and supporting wiring within the robot.",
      image: "/images/robot/electronics-wiring.jpg",
      imageAlt: "Electronics and wiring inside Gear Shift Robot",
    },
    {
      id: "telemetry",
      title: "Display and Telemetry",
      description:
        "An OLED display provides robot information, including its identification and battery voltage.",
      image: "/images/robot/robot-telemetry-display.jpg",
      imageAlt: "OLED telemetry display on Gear Shift Robot",
    },
    {
      id: "power",
      title: "Battery and Power System",
      description:
        "An 11.1 V nominal, 2200 mAh lithium-ion battery supplies power to the electronic systems and all six actuators.",
      image: "/images/robot/robot-battery.jpg",
      imageAlt: "Lithium-ion battery used in Gear Shift Robot",
    },
  ],
};

export default electronicsData;
