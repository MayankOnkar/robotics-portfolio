
const controlData = {
  heading: "Wireless Control System",

  intro:
    "Gear Shift Robot can be operated manually using a separate handheld controller that communicates wirelessly with the robot.",

  controller: {
    title: "Handheld Manual Controller",
    description:
      "A game-controller-style device allows the operator to send direction and speed commands to the robot.",
    image: "/images/robot/controller-electronics.JPG",

    // "C:\Users\MAYANK\Development\robotics-portfolio\public\images\robot\controller-electronics.JPG"
    imageAlt: "Handheld wireless controller used to operate Gear Shift Robot",
  },

  communication: {
    title: "Bluetooth Communication",
    description:
      "The handheld controller communicates with the HEXAHUB ESP32-based controller over Bluetooth, transmitting the operator's commands.",
  },

  robotController: {
    title: "HEXAHUB ESP32 Controller",
    description:
      "The HEXAHUB controller receives and processes the commands before they are used to control the robot's actuators.",
  },

  actuators: {
    title: "Actuator Control",
    description:
      "The control system uses direction and speed commands to operate the robot's six actuators.",
    count: 6,
  },

  flow: [
    "Handheld controller",
    "Bluetooth communication",
    "HEXAHUB ESP32 controller",
    "Six robot actuators",
  ],
};

export default controlData;
